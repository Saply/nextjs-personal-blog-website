/** @type {import('next').NextConfig} */
const {withContentlayer} = require("next-contentlayer2")

/** @type {import('next').NextConfig} */

const nextConfig = {
    compiler: {
        removeConsole: true
    }
}

module.exports = withContentlayer({...nextConfig})