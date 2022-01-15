module.exports = {
    siteMetadata: {
        siteUrl: "http://shonansurvivors-prod-coreapp-lp.s3-website-ap-northeast-1.amazonaws.com",
        title: "My Gatsby Site",
    },
    plugins: [
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: "shonansurvivors-prod-coreapp-lp",
            },
        },
    ],
};
