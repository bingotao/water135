import formsConfig from './formsConfig';
import createDCB from './DCBForm';

var forms = {},
    sslx = [];

for (let i in formsConfig) {
    let item = formsConfig[i];
    sslx.push(i);
    for (let t of item.tables) {
        let id = t.id;
        let form = createDCB(t);
        // 将所有创建的调查表类型都放到form对象中，以调查表的id为键
        forms[id] = form;
        // 为每个配置也加上创建好的form
        t.form = form;
    }
}

export { forms, formsConfig, sslx };