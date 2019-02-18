import { ListBase, ListItemData, IListItem } from "./listBase";
import { ArrayCollection } from "../../core/arrayCollection";
import { ScrollPanel } from "../../containers/scrollPanel/scrollPanel";
import { EventDispatcher } from "../../core/eventDispatcher";
export declare class ListBox extends ListBase {
    private _backgroundColorField;
    backgroundColorField: string;
    private _colorField;
    colorField: string;
    fontField: string;
    private _fontField;
    colorFunction: (data: ListItemData) => string;
    fontFunction: (data: ListItemData) => string;
    backgroundColorFunction: (data: ListItemData) => string;
    protected setListItemStyles(item: IListItem): void;
    setItemData(data: ListItemData, item: IListItem): void;
    private static isListCSSLoaded;
    private static isListCSSDarkLoaded;
    protected _scrollPanel: ScrollPanel;
    protected isDark: boolean;
    protected panel: HTMLDivElement;
    readonly scrollPanel: ScrollPanel;
    constructor(isDark?: boolean, showCheckBox?: boolean);
    protected selectItem(items: ArrayCollection<any>, item: any): void;
    protected createListItem(data: ListItemData): IListItem;
    protected _xmlDataProviderElement: Element;
    xmlDataProvider: Element;
    selectItemById(id: any): void;
    protected _selectedItem: ListBoxItem;
    selectedItem: ListBoxItem;
    protected selectItemFun(items: ArrayCollection<ListBoxItem>, item: ListBoxItem): void;
    protected _items: ArrayCollection<ListBoxItem>;
    readonly items: ArrayCollection<ListBoxItem>;
    protected loadHtml(): void;
    protected setItemStyle(item: ListBoxItem, isSelected: boolean): void;
    protected setItems(items: ArrayCollection<IListItem>): void;
    protected removeItemHandler(item: ListBoxItem): void;
    protected changeHandler(): void;
}
export declare class ListBoxItem extends EventDispatcher implements IListItem {
    protected _oldHeight: number;
    protected isDark: boolean;
    _listItemLabelElement: HTMLDivElement;
    _listItemIconElement: HTMLImageElement;
    element: HTMLDivElement;
    _listItemLabelAndIconPanel: HTMLDivElement;
    constructor(label: string, icon?: string, data?: Array<any>, isDark?: boolean);
    protected stringColorToCSS(c: string, alpha?: number): string;
    readonly _height: number;
    protected loadHtml(): void;
    label: string;
    protected _label: string;
    icon: string;
    protected _icon: string;
    data: Array<any>;
    protected _data: Array<any>;
    setBackgroundColor(color: string): void;
    setFont(font: string): void;
    private setStyleFun;
    setColor(color: string): void;
}