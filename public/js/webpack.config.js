const path = require('path');
module.exports = {
    //번들링할 파일지정
    entry: './thirdparty.js',
    //번들링결과를 어디에 저장할 것인지
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'thirdparty.bundle.js'
    },
    //js파일들을 babel-loader가 처리
    //babel-loader는 babel.config.js파일의 내용을 설정값으로 사용한다.
    module:{
        rules: [{ test: /\.js$/, use: ['script-loader']}],
    },
    //웹팩은 기본적으로 압축을진행하는데, 압축기능을 끈다.
    optimization: { minimizer:[] },
};