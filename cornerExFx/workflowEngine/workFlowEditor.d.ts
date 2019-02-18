import { DisplayObject } from "../core/displayObject";
import { WorkFlowInfo, WorkFlowStepInfo } from "./workFlowEngine";
import { DataForm } from "../mvvm/dataForm/dataForm";
import { ArrayCollection } from "../core/arrayCollection";
import { Button } from "../controls/button/button";
import { FXEvent } from "../core/fXEvent";
import { TitleWindow } from "../containers/titleWindow/titleWindow";
import { Dictionary } from "../core/dictionary";
import { WorkFlowGoBackEditor } from "./workFlowGoBackEditor";
export declare class WorkFlowEditor extends DisplayObject {
    private info;
    private workFlowInfoBarLabel;
    private workFlowInfoBarLink;
    private static workFlowInfoIsCSSLoaded;
    private static workFlowEditorIsCSSLoaded;
    private workFlowEditorBottom;
    private _dataForm;
    readonly dataForm: DataForm;
    private hideInfo;
    private showInfo;
    close(): void;
    browseFieldSelectedFunction: (stepInfo: WorkFlowStepInfo, workFlowInfo: WorkFlowInfo, field: string) => string;
    browseFieldOpenFunction: (titleWindow: TitleWindow, stepInfo: WorkFlowStepInfo, workFlowInfo: WorkFlowInfo, field: string) => void;
    callFunction: (value: string, stepInfo: WorkFlowStepInfo, workFlowInfo: WorkFlowInfo, field: string) => void;
    setData(data: Dictionary<string, string>, index?: number): void;
    getData(stepId?: number): Dictionary<string, string>;
    setFieldEnabled(field: string, enabled: boolean, stepId?: number): void;
    setFieldVisible(field: string, visible: boolean, stepId?: number): void;
    buttonSave: Button;
    buttonSubmit: Button;
    buttonGoback: Button;
    buttonPrint: Button;
    private _workFlowInfo;
    readonly workFlowInfo: WorkFlowInfo;
    private listTitle;
    private _listData;
    readonly listDataForm: ArrayCollection<DataForm>;
    private workFlowEngineGoBackDialog;
    private scrollPanel;
    loadData(workFlowInfo?: WorkFlowInfo): void;
    constructor(workFlowInfo: WorkFlowInfo);
    goBackEditorFunction: (workFlowInfo: WorkFlowInfo) => WorkFlowGoBackEditor;
    private goBack;
    private submit;
    private update;
    private save;
    timerH: number;
    private stepI;
    private isStartStep;
    private loadControlI;
    private isLoading;
    private loadControls;
    private timerResizeH;
    private toBottom;
    private formDataResize;
    private timerScrollH;
    private scroll;
}
export declare class FxWorkFlowEditorEvent extends FXEvent {
    constructor();
    static readonly Load: string;
}
