import buble from 'rollup-plugin-buble';

export default {
    moduleName: 'img2html',
    entry: './src/main.js',
    sourceMap: true,
    useStrict: false,
    plugins: [ 
        buble()
    ],
    targets: [
        {
            format: 'es',
            dest: './dist/img2html.js'
        }, 
        {
            format: 'cjs',
            dest: './dist/img2html.cjs.js'
        }, 
        {
            format: 'umd',
            dest: './dist/img2html.umd.js'
        },
        {
            format: 'iife',
            dest: './dist/img2html.global.js',
        }
    ],
    external: ['html'],

    globals: {
        html: 'html'
    }
};