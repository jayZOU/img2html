import { rollup } from 'rollup';
import buble from 'rollup-plugin-buble';
import uglify from 'rollup-plugin-uglify';

const option = {
    entry: './src/img2html.js',
    plugins: [ 
        buble(),
        uglify()
    ],
}

rollup(option)
    .then((bundle) => {
        bundle.write({
            format: 'cjs',
            moduleName: 'img2html',
            sourceMap: true,
            useStrict: false,
            dest: './dist/img2html.cjs.js'
        });
        return rollup(option)
    })
    .then((bundle) => {
        bundle.write({
            format: 'iife',
            moduleName: 'img2html',
            sourceMap: true,
            useStrict: false,
            dest: './dist/img2html.global.js'
        });
        return rollup(option)
    })
    .then((bundle) => {
        bundle.write({
            format: 'umd',
            moduleName: 'img2html',
            sourceMap: true,
            useStrict: false,
            dest: './dist/img2html.umd.js'
        });
        return rollup({
            entry: './src/img2html.js',
            plugins: [ 
                buble()
            ],
        })
    })
    .then((bundle) => {
        bundle.write({
            format: 'es',
            sourceMap: true,
            dest: './dist/img2html.js'
        });
        // return rollup(option)
    })