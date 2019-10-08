import resolve from 'rollup-plugin-node-resolve'

export default {
  input: './main.js',
  plugins: [
    resolve({
      mainFields: ['main', 'module']
    })
  ],
  output: [
    { file: 'dist/index.esm.js', format: 'esm', name: 'tiny-compose' },
    { file: 'dist/index.umd.js', format: 'umd', name: 'tiny-compose' },
    { file: 'dist/index.unpkg.js', format: 'iife', name: 'Tiny' }
  ]
}
