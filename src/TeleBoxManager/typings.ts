import type { TeleBoxColorScheme } from "..";
import type { ReadonlyTeleBox, TeleBoxState } from "../TeleBox";
import type { TeleBoxConfig } from "../TeleBox/typings";
import type { TeleBoxCollector } from "../TeleBoxCollector";
import type { TELE_BOX_MANAGER_EVENT } from "./constants";

export interface TeleBoxManagerConfig extends Pick<TeleBoxConfig, "namespace"> {
    /** Element to mount boxes. */
    readonly root?: HTMLElement | null;
    /** Stage area height/with ratio. No ratio if <= 0. Default -1. */
    readonly stageRatio?: number;
    /** Where the minimized boxes go. */
    readonly collector?: TeleBoxCollector;
    /** Restrict box to always be within the stage area. Default false. */
    readonly fence?: boolean;
    /** Prefers Box color scheme. Default light. */
    readonly prefersColorScheme?: TeleBoxColorScheme;
    /** Maximize box. Default false. */
    readonly maximized?: boolean;
    /** Minimize box. Overwrites maximized state. Default false. */
    readonly minimized?: boolean;
    /** Is box readonly */
    readonly readonly?: boolean;
    /** Extra styles for telebox manager container */
    readonly containerStyle?: string;
    /** Extra styles for telebox manager stage */
    readonly stageStyle?: string;
}

type TeleBoxManagerBoxConfigBaseProps =
    | "title"
    | "visible"
    | "width"
    | "height"
    | "minWidth"
    | "minHeight"
    | "x"
    | "y"
    | "resizable"
    | "draggable"
    | "boxRatio"
    | "zIndex"
    | "contentStageRatio";

export type TeleBoxManagerCreateConfig = Pick<
    TeleBoxConfig,
    | TeleBoxManagerBoxConfigBaseProps
    | "content"
    | "stage"
    | "footer"
    | "id"
    | "focus"
>;

export type TeleBoxManagerQueryConfig = Pick<
    TeleBoxConfig,
    | "title"
    | "visible"
    | "resizable"
    | "draggable"
    | "boxRatio"
    | "contentStageRatio"
    | "zIndex"
    | "id"
    | "focus"
>;

export type TeleBoxManagerUpdateConfig = Pick<
    TeleBoxConfig,
    TeleBoxManagerBoxConfigBaseProps | "content" | "stage" | "footer"
>;

type CheckTeleBoxManagerConfig<
    T extends Record<`${TELE_BOX_MANAGER_EVENT}`, any>
> = T;

export type TeleBoxManagerEventConfig = CheckTeleBoxManagerConfig<{
    focused: ReadonlyTeleBox | undefined;
    blurred: ReadonlyTeleBox | undefined;
    created: ReadonlyTeleBox;
    removed: ReadonlyTeleBox[];
    state: TeleBoxState;
    maximized: boolean;
    minimized: boolean;
    move: ReadonlyTeleBox;
    resize: ReadonlyTeleBox;
    intrinsic_move: ReadonlyTeleBox;
    intrinsic_resize: ReadonlyTeleBox;
    visual_resize: ReadonlyTeleBox;
    z_index: ReadonlyTeleBox;
    prefers_color_scheme: TeleBoxColorScheme;
    dark_mode: boolean;
}>;

export type TeleBoxManagerEvent = keyof TeleBoxManagerEventConfig;
