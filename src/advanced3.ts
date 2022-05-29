console.log('--------------advanced3.ts--------------');

enum AType3 {
    Strong,
    Week,
}
class AJava {
    helloJava() {
        console.log('Hello Java!');
    }
    java: any;
}
class AJavaScript {
    helloJavaScript() {
        console.log('Hello JavaScript!');
    }
    javaScript: any;
}

function isJava(lang: AJava | AJavaScript): lang is AJava {
    return (lang as AJava).helloJava !== undefined;
}

function aGetLanguage(type: AType3, x: string | number) {
    let lang = type === AType3.Strong ? new AJava() : new AJavaScript();
    if ((lang as AJava).helloJava) {
        (lang as AJava).helloJava();
    } else {
        (lang as AJavaScript).helloJavaScript();
    }

    // 1. instanceof
    if (lang instanceof AJava) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }

    // 2. in
    if ('helloJava' in lang) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }

    // 3. typeof
    if (typeof x === 'string') {
        console.log(x.length);
    } else {
        console.log(x.toFixed());
    }

    // 4. function
    if (isJava(lang)) {
        lang.helloJava();
    } else {
        lang.helloJavaScript();
    }
    return lang;
}

aGetLanguage(AType3.Strong, 1);
aGetLanguage(AType3.Week, 2);
