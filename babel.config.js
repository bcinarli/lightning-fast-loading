module.exports = (api) => {
  api.cache.using(() => process.env.NODE_ENV);
  const env = api.env().split(' ');
  const browserslistEnv =
    process.env.BROWSERSLIST_ENV || env.includes('legacy')
      ? 'legacy'
      : 'modern';

  return {
    presets: [
      ['@babel/preset-react', { runtime: 'automatic' }],
      '@babel/preset-typescript'
    ],
    plugins: [
      ['@babel/plugin-proposal-class-properties', { loose: true }],
      env.includes('development') && [
        'react-refresh/babel',
        // skipping env check since we have other env types e.g. modern/legacy are defined
        { skipEnvCheck: true }
      ]
    ],
    env: {
      modern: {
        presets: [
          [
            '@babel/preset-env',
            {
              bugfixes: true,
              targets: { esmodules: true },
              modules: false,
              useBuiltIns: 'usage',
              corejs: { version: '3' },
              browserslistEnv
            }
          ]
        ]
      },
      legacy: {
        presets: [
          [
            '@babel/preset-env',
            {
              modules: false,
              useBuiltIns: 'usage',
              corejs: { version: '3' },
              browserslistEnv
            }
          ]
        ]
      },
      test: {
        presets: [
          [
            '@babel/preset-env',
            {
              targets: {
                node: 'current'
              }
            }
          ]
        ]
      }
    }
  };
};
