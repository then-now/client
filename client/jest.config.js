module.exports = {
  testMatch: ['**/*.spec.[jt]s?(x)', '**/*.test.[jt]s?(x)'],
  moduleNameMapper: {
    'main/(.*)$': '<rootDir>/src/$1', // 웹팩 alias와 같음
  },
  moduleFileExtensions: ['js', 'vue'], // 확장자 생략
}
