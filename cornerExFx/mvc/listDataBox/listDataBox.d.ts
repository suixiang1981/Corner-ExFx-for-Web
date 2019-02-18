import { DisplayObject } from "../../core/displayObject";
import { HttpClient } from "../../communication/httpClient";
import { Dictionary } from "../../core/dictionary";
import { MVVMListInfo } from "../../mvvm/mvvmBase";
import { ListBox } from "../../controls/listBox/listBox";
export declare class ListDataBox extends DisplayObject {
    pageRowCount: number;
    protected _control: ListBox;
    protected httpClient: HttpClient;
    protected searchWhere: string;
    protected listDataName: string;
    readonly control: ListBox;
    protected isDark: boolean;
    protected showProgress: boolean;
    constructor(name: string, port?: number, isDark?: boolean, showProgress?: boolean);
    protected loadHtml(): void;
    protected where: string;
    protected _info: MVVMListInfo;
    additionalData: Dictionary<string, string>;
    loadInfoFunction: (info: MVVMListInfo) => MVVMListInfo;
    readonly Info: MVVMListInfo;
    load(where?: string): void;
    loadFromInfo(info: MVVMListInfo, where?: string): void;
    protected setControl(info: MVVMListInfo): void;
    protected _rowCount: number;
    protected setRowCount(newValue: number): void;
    readonly rowCount: number;
    protected _loadDataXMLFunction(xml: XMLDocument): void;
    loadDataFunction: (data: Element) => Element;
    loadData(page?: any, where?: string): void;
    protected _page: number;
    protected setPage(newValue: number): void;
    readonly page: number;
}
