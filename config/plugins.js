module.exports = ({ env }) => ({
    upload: {
      config: {
        provider: 'cloudinary',
        providerOptions: {
          cloud_name: env('dc2znq9fd'),
          api_key: env('814119828967242'),
          api_secret: env('uTIQANtBp5OO_dwIqTvEz_xcerI'),
        },
        actionOptions: {
          upload: {},
          delete: {},
        },
      },
    },
    
  });