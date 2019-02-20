class Util {
    // 获取路径传的参数
    public getQueryString(name: string): string {
        const reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i');
        const r = window.location.search.substr(1).match(reg);
        if (r != null) {
            return r[2];
        }
        return '';
    }
}
export const util = new Util();
