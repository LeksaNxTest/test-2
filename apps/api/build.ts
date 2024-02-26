import * as esbuild from 'esbuild'

async function main() {
    await esbuild.build({
        entryPoints: ['src/index.ts'],
        bundle: true,
        treeShaking: false,
        platform: 'node',
        target: 'node20',
        outdir: 'dist',
    })
}

main()
