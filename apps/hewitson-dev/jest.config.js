module.exports = {
  name: 'hewitson-dev',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/hewitson-dev',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js',
  ],
};
