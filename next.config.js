module.exports = {
    eslint: {
        ignoreDuringBuilds: true, // Skip ESLint checks during production builds
    },
    typescript: {
        ignoreBuildErrors: true, // Skip TypeScript errors during production builds
    },
    experimental: {
        // If you want to bypass all checks during SSR or static generation
        forceSwcTransforms: true,
    },
}
