import dts from 'rollup-plugin-dts';
import esbuild from 'rollup-plugin-esbuild';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import globals from 'rollup-plugin-node-globals';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import nodePolyfills from 'rollup-plugin-polyfill-node';
import pkg from './package.json';



const bundles = [
  // ES module, not minified + sourcemap
  {
    plugins: [
      json(),
      esbuild(),
    ],
    output: [
      {
        file: `dist/${pkg.name}.mjs`,
        format: "es",
        sourcemap: true
      }
    ],
    input: "src/index.ts",
    watch: {
      include: 'src/**'
    },
    external: [
      "@maptiler/sdk",
      "events",
      "three",
      "three/examples/jsm/controls/OrbitControls.js",
      "three/examples/jsm/exporters/GLTFExporter.js",
      "@google/model-viewer",
      "@google/model-viewer/dist/model-viewer",
      "three/examples/jsm/exporters/USDZExporter.js",
      "three/examples/jsm/libs/fflate.module.js",
    ]
  },

  // UMD module, not minified
  {
    plugins: [
      nodePolyfills(),
      nodeResolve(), // for the standalone UMD, we want to resolve so that the bundle contains all the dep.
      commonjs({ include: 'node_modules/**' }),
      globals(),
      json(),
      esbuild()
    ],
    output: {
      name: pkg.name,
      file: `dist/${pkg.name}.js`, 
      format: "umd",
      sourcemap: true,
      globals: {
        "@maptiler/sdk": "maptilersdk",
      }
    }
    ,
    input: "src/index.ts",
    watch: {
      include: 'src/**'
    },
    external: [
      "@maptiler/sdk",
    ]
  },

  // types
  {
    "plugins": [
      dts()
    ],
    output: {
      file: `dist/${pkg.name}.d.ts`,
      format: "es"
    },
    input: "src/index.ts"
  }
]

if (process.env.NODE_ENV === 'production') {
  bundles.push(
  // ES module, minified
  {
    plugins: [
      json(),
      esbuild({
        sourceMap: false,
        minify: true,
      })
    ],
    output: [
      {
        file: `dist/${pkg.name}.min.mjs`,
        format: "es",
      }
    ],
    input: "src/index.ts",
    external: [
      "@maptiler/sdk",
      "events",
      "three",
      "three/examples/jsm/controls/OrbitControls.js",
      "three/examples/jsm/exporters/GLTFExporter.js",
      "@google/model-viewer",
      "@google/model-viewer/dist/model-viewer",
      "three/examples/jsm/exporters/USDZExporter.js",
      "three/examples/jsm/libs/fflate.module.js",
    ],
  },
  {
    plugins: [
      nodePolyfills(),
      nodeResolve(), // for the standalone UMD, we want to resolve so that the bundle contains all the dep.
      commonjs({ include: 'node_modules/**' }),
      globals(),
      json(),
      esbuild({
        sourceMap: false,
        minify: true,
      })
    ],
    output: {
      name: pkg.name,
      file: `dist/${pkg.name}.min.js`, 
      format: "umd",
      sourcemap: true,
      globals: {
        "@maptiler/sdk": "maptilersdk",
      }
    },
    input: "src/index.ts",
    watch: {
      include: 'src/**'
    },
    external: []
  }
  )

}

export default bundles


 