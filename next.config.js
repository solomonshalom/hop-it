/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		disableStaticImages: true
	  },	
	disableStaticImages: true,
	swcMinify: true,
	env: {
		PROJECT_ID: process.env.PROJECT_ID,
		CHANNEL_ID: process.env.CHANNEL_ID,
	},
};

module.exports = nextConfig;
