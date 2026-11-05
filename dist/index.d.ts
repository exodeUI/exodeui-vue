import { ComponentOptionsMixin } from 'vue';
import { ComponentProvideOptions } from 'vue';
import { CSSProperties } from 'vue';
import { DefineComponent } from 'vue';
import { ExtractPropTypes } from 'vue';
import { PropType } from 'vue';
import { PublicProps } from 'vue';
import { ShallowRef } from 'vue';

declare type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;

declare type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};

declare type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: PropType<T[K]>;
        required: true;
    };
};

declare type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};

export declare interface Adjustments {
    exposure?: number;
    contrast?: number;
    saturation?: number;
    hue?: number;
    negative?: number;
    temperature?: number;
    tint?: number;
    highlights?: number;
    shadows?: number;
    blur?: number;
}

export declare type AlignContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'stretch';

export declare type AlignItems = 'flex-start' | 'center' | 'flex-end' | 'stretch';

export declare type Alignment = 'Center' | 'TopLeft' | 'TopCenter' | 'TopRight' | 'CenterLeft' | 'CenterRight' | 'BottomLeft' | 'BottomCenter' | 'BottomRight';

export declare interface AnalyticsConfig {
    isEnabled: boolean;
    eventName: string;
    triggerType: 'click' | 'hover' | 'visible';
    platforms: {
        ga4: boolean;
        meta: boolean;
        mixpanel: boolean;
    };
    parameters: AnalyticsParameter[];
}

export declare interface AnalyticsParameter {
    key: string;
    value: string;
    type: 'literal' | 'variable';
}

declare interface Animation_2 {
    id: string;
    name: string;
    duration: number;
    tracks: Track[];
    playInstances?: PlayInstance[];
}
export { Animation_2 as Animation }

export declare interface AnimationFlowRule {
    id: string;
    trigger: 'on_load' | 'after_delay' | 'after_anim' | 'on_scroll' | 'manual' | 'variable';
    targetAnimationId: string;
    delay?: number;
    afterAnim?: string;
    conditions?: {
        variable: string;
        operator: string;
        value: any;
    }[];
    subAnimationIds?: string[];
    loop?: boolean;
    conditionVariableId?: string;
    conditionOperator?: string;
    conditionValue?: any;
}

declare interface ApiAuthConfig {
    type: ApiAuthType;
    /** bearer token */
    token?: string;
    /** basic auth */
    username?: string;
    password?: string;
    /** for 'header' | 'query' — the name to send the credential under */
    keyName?: string;
    secret?: boolean;
}

declare type ApiAuthType = 'none' | 'bearer' | 'basic' | 'header' | 'query';

/**
 * API Variable core.
 *
 * Backs the `Api` state-machine input type: a variable whose value is pulled
 * directly from a URL on an interval, like a normal API caller.
 *
 * This module is deliberately framework-agnostic and dependency-free so the
 * exact same file can be dropped into the editor and every framework runtime
 * (React / Vue / Svelte / Solid / Angular / RN / Vanilla).
 *
 * Security model:
 *  - https-only by default, credentials-in-URL rejected, private/loopback/
 *    link-local hosts blocked (anti-SSRF).
 *  - hard timeout + response-size cap, one in-flight request at a time.
 *  - secrets are flagged and can be redacted before a project is exported.
 */
declare type ApiHttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

/** A single query param or header row. */
declare interface ApiKeyValue {
    id: string;
    key: string;
    value: string;
    /** Masked in the UI and flagged on export. */
    secret?: boolean;
    enabled?: boolean;
}

declare type ApiResultType = 'auto' | 'number' | 'string' | 'boolean' | 'array';

declare interface ApiVariableConfig {
    url: string;
    method?: ApiHttpMethod;
    query?: ApiKeyValue[];
    headers?: ApiKeyValue[];
    /** Raw request body (JSON string) for POST/PUT/PATCH. */
    body?: string;
    auth?: ApiAuthConfig;
    /** Dot/bracket path into the JSON response, e.g. `$.data.items[0].price`. Empty = whole payload. */
    path?: string;
    resultType?: ApiResultType;
    /** Poll interval in ms. 0/undefined = manual refresh only. */
    intervalMs?: number;
    /** Request timeout in ms (default 10_000). */
    timeoutMs?: number;
    /** Start polling when the project loads/plays (default true). */
    startOnLoad?: boolean;
}

export declare interface Artboard {
    id?: string;
    name: string;
    width: number;
    height: number;
    backgroundColor: string;
    backgroundVisible?: boolean;
    backgroundImage?: string;
    backgroundOpacity?: number;
    opacity?: number;
    x?: number;
    y?: number;
    objects: (ShapeObject | any)[];
    animations: Animation_2[];
    stateMachine?: StateMachine;
    tokens?: DesignTokens;
    physics?: {
        enabled?: boolean;
        gravity?: {
            x: number;
            y: number;
        };
        wind?: {
            x: number;
            y: number;
        };
        timeScale?: number;
        collideWithBounds?: boolean;
        joints?: any[];
        /** Physics Effects for every falling body (see physicsEffects.ts). */
        effects?: PhysicsEffectsConfig;
    };
    layoutProps?: LayoutProps;
    layoutScaleFactor?: number;
    baseWidth?: number;
    baseHeight?: number;
    seo?: SEOConfig;
    startupAnimationId?: string;
    startupSubAnimationIds?: string[];
    animationFlow?: AnimationFlowRule[];
    /** Screen-to-Screen navigation rules (see NavigationRule). */
    navigation?: NavigationRule[];
    stateVariables?: {
        id: string;
        name: string;
        type: 'Boolean' | 'Number' | 'Trigger' | 'RandomNumber' | 'RandomColor';
        value: any;
        min?: number;
        max?: number;
        minAlpha?: number;
        maxAlpha?: number;
    }[];
    lastModified?: number;
    responsive?: ResponsiveConfig;
}

export declare interface ArtEffectConfig {
    enabled: boolean;
    type: ArtEffectType;
    intensity: number;
    speed?: number;
    scale?: number;
    color1?: string;
    color2?: string;
    chaosEnabled?: boolean;
    chaosAmount?: number;
}

/**
 * Gen Z Art Effects - Inspired by modern design trends
 */
export declare type ArtEffectType = 'glitch' | 'halftone' | 'pixelate' | 'noise' | 'acid_gradient' | 'acid_rave' | 'shimmer';

export declare const BAR_STYLE_PRESETS: Record<string, {
    label: string;
    colors: string[];
    cardBackground: string;
    cardBorderColor: string;
    gridColor: string;
    axisLabelColor: string;
    legendColor: string;
    barGradient: boolean;
}>;

export declare interface Behavior {
    id: string;
    type: BehaviorType;
    enabled: boolean;
    sensors: BehaviorSensor[];
    settings?: Record<string, any>;
    startTime?: number;
    endTime?: number;
}

export declare enum BehaviorSensor {
    Scale = "Scale",
    Opacity = "Opacity",
    RotateZ = "RotateZ",
    RotateX = "RotateX",
    RotateY = "RotateY",
    PositionX = "PositionX",
    PositionY = "PositionY",
    SkewX = "SkewX",
    Blur = "Blur",
    Exposure = "Exposure",
    HueShift = "HueShift",
    Negative = "Negative",
    CornerRadius = "CornerRadius",
    StrokeWidth = "StrokeWidth",
    BoxShadow = "BoxShadow",
    FontSize = "FontSize",
    LetterSpacing = "LetterSpacing"
}

export declare enum BehaviorType {
    Proximity = "Proximity",
    Magnetic = "Magnetic",
    Repel = "Repel",
    Orbit = "Orbit",
    Vortex = "Vortex",
    Fluid = "Fluid",
    Elastic = "Elastic",
    Holographic = "Holographic",
    Sticky = "Sticky",
    Dilation = "Dilation",
    Parallax = "Parallax",
    Noise = "Noise",
    Float = "Float",
    Pulse = "Pulse",
    Draggable = "Draggable",
    Scroll = "Scroll",
    LookAt = "LookAt",
    Glint = "Glint",
    Scan = "Scan",
    Ratchet = "Ratchet",
    Jitter = "Jitter",
    Follower = "Follower",
    Wrap = "Wrap",
    Typewriter = "Typewriter",
    Scramble = "Scramble",
    Wave = "Wave",
    Bounce = "Bounce",
    TextTrail = "TextTrail",
    Reveal3D = "Reveal3D",
    RevealSlide = "RevealSlide",
    RevealBlur = "RevealBlur",
    TextLiquid = "TextLiquid",
    TextVortex = "TextVortex",
    TextExplosion = "TextExplosion",
    TextRain = "TextRain",
    TextGravity = "TextGravity",
    TextMatrix = "TextMatrix",
    TextNeon = "TextNeon",
    TextDissolve = "TextDissolve",
    TextOrganic = "TextOrganic",
    TextBreathe = "TextBreathe",
    TextSpin = "TextSpin",
    TextMagnet = "TextMagnet",
    TextPerspective = "TextPerspective",
    TextMirror = "TextMirror",
    TextFloral = "TextFloral",
    TextSmoke = "TextSmoke",
    TextVariable = "TextVariable",
    TextZing = "TextZing",
    TextElastic = "TextElastic",
    TextGlitch3D = "TextGlitch3D",
    GlitchText = "GlitchText",
    TextCounter = "TextCounter",
    Squash = "Squash",
    Spotlight = "Spotlight",
    Lens = "Lens",
    Gravity = "Gravity",
    Velocity = "Velocity",
    Shear = "Shear",
    LayoutAnimation = "LayoutAnimation",
    SpringChain = "SpringChain",
    ParticleEmitter = "ParticleEmitter",
    StateReactive = "StateReactive",
    Fold = "Fold",
    Crumple = "Crumple"
}

export declare interface BlendAnimation {
    animationId: string;
    position: [number, number];
}

export declare interface Blur {
    amount: number;
}

export declare interface BoneIKConfig {
    boneCount: number;
    solver: 'analytic-2bone' | 'ccd';
}

export declare type BoneMode = 'fk' | 'ik' | 'spline';

export declare interface BoneObject {
    type: 'Bone';
    id: string;
    name: string;
    transform: Transform;
    geometry: {
        type: 'Bone';
        length: number;
        isTip?: boolean;
    };
    style: Style;
    mode?: BoneMode;
    ikConfig?: BoneIKConfig;
    splineConfig?: BoneSplineConfig;
    opacity?: number;
    visible?: boolean;
    isVisible?: boolean;
    parentId?: string;
    children?: string[];
    options?: any;
    triggers?: Trigger[];
    interactions?: Interaction[];
    constraints?: Constraint[];
    physics?: Physics;
    behaviors?: Behavior[];
    masks?: any[];
}

export declare interface BoneSplineConfig {
    points: {
        x: number;
        y: number;
    }[];
    tension: number;
}

export declare interface ComponentEvent {
    objectId: string;
    componentName: string;
    variant: string;
    property: string;
    value: any;
}

export declare interface Condition {
    inputId: string;
    op: ConditionOp;
    value?: number | boolean;
}

export declare enum ConditionOp {
    Equal = "Equal",
    NotEqual = "NotEqual",
    GreaterThan = "GreaterThan",
    LessThan = "LessThan",
    GreaterEqual = "GreaterEqual",
    LessEqual = "LessEqual",
    IsTrue = "IsTrue",
    IsFalse = "IsFalse"
}

export declare interface Constraint {
    id?: string;
    type: 'Translation' | 'Rotation' | 'Scale' | 'Transform' | 'Distance' | 'IK' | 'FollowPath' | 'FollowPointer';
    targetId: string;
    strength: number;
    copyX?: boolean;
    copyY?: boolean;
    limitX?: {
        enabled: boolean;
        min: number;
        max: number;
    };
    limitY?: {
        enabled: boolean;
        min: number;
        max: number;
    };
    distance?: number;
    mode?: 'clamped' | 'exact' | 'minimum' | 'maximum';
    orient?: boolean;
    offsetRotation?: number;
    offsetX?: number;
    offsetY?: number;
    useSpring?: boolean;
    stiffness?: number;
    damping?: number;
    mass?: number;
}

export declare interface DesignTokens {
    colors: Record<string, string>;
    typography: Record<string, {
        fontFamily: string;
        fontSize: number;
        fontWeight: string | number;
        lineHeight?: number;
    }>;
    spacing: Record<string, number>;
    effects: Record<string, any>;
    radii?: Record<string, number>;
    opacities?: Record<string, number>;
}

declare interface EventListener_2 {
    id: string;
    objectId: string;
    eventType: string;
    name: string;
}
export { EventListener_2 as EventListener }

/** Callbacks every framework wrapper can forward to its framework-idiomatic handlers. */
export declare interface ExodeCanvasCallbacks {
    onReady?: (engine: ExodeUIEngine) => void;
    onTrigger?: (triggerId: string, metadata?: any) => void;
    onInputUpdate?: (inputs: Record<string, any>) => void;
    onComponentChange?: (event: ComponentEvent) => void;
    onToggle?: (id: string, active: boolean) => void;
    onInputChange?: (id: string, value: string) => void;
    onInputFocus?: (id: string) => void;
    onInputBlur?: (id: string) => void;
    onButtonClick?: (id: string, objectId?: string) => void;
    onGraphPointClick?: (graphId: string, point: any) => void;
    onNavigation?: (event: ExodeNavigationEvent) => void;
    onLog?: (message: string, level: 'info' | 'warn' | 'error') => void;
    onLogicUpdate?: (state: any) => void;
    onFPSUpdate?: (fps: number) => void;
    /** Named callbacks matching listeners configured in the Exode editor. */
    callbacks?: Record<string, (...args: any[]) => void>;
}

export declare interface ExodeCanvasOptions extends ExodeCanvasCallbacks {
    artboard?: Artboard;
    /** URL to an `.exode` / `.bexode` file, or a JSON string. */
    src?: string;
    /** Pre-read `.bexode` buffer. */
    buffer?: ArrayBuffer | Uint8Array;
    /** Bump to force a reload of the same artboard. */
    revision?: number;
    fit?: Fit;
    alignment?: Alignment;
    layoutScaleFactor?: number;
    autoPlay?: boolean;
    interactive?: boolean;
    preventScroll?: boolean;
    highRefreshRate?: boolean;
    currentTime?: number;
    scrollX?: number;
    scrollY?: number;
    viewportScrollX?: number;
    viewportScrollY?: number;
    mouseX?: number;
    mouseY?: number;
    isMouseDown?: boolean;
    inputs?: Record<string, any>;
}

/**
 * ExodeCanvasRuntime owns the engine, the render loop and all DOM listeners for a
 * single canvas element. Every framework package (vanilla, Vue, Solid, Svelte,
 * Angular) drives one of these so behaviour stays identical across frameworks.
 */
export declare class ExodeCanvasRuntime {
    readonly engine: ExodeUIEngine;
    private canvas;
    private ctx;
    private opts;
    private rafId;
    private subFrameTimer;
    private lastTime;
    private lastRenderMs;
    private fpsFrames;
    private fpsLastTime;
    private destroyed;
    private eventsAttached;
    private resizeObserver;
    private canvasRect;
    private lastLoadedId;
    private lastRevision;
    private loadToken;
    private artboardState;
    constructor(canvas: HTMLCanvasElement, options?: ExodeCanvasOptions);
    /** Merge new options and apply whichever ones affect the running engine. */
    setOptions(patch: Partial<ExodeCanvasOptions>): void;
    /** Load the artboard from `artboard`, `buffer` or `src`. Safe to call repeatedly. */
    loadArtboard(force?: boolean): Promise<void>;
    /** Start the animation loop. */
    play(): void;
    /** Stop the animation loop (the last frame stays on screen). */
    pause(): void;
    /** Seek to a time in seconds and render that frame immediately. */
    seek(time: number): void;
    /** Recompute the backing buffer size from the canvas CSS size. */
    resize(): void;
    /** Current artboard data, if one has been loaded. */
    getArtboard(): Artboard | null;
    /** Remove every listener and stop the loop. */
    destroy(): void;
    private get interactive();
    private set interactive(value);
    private get listeners();
    private log;
    private invokeNamedListeners;
    private registerCallbacks;
    private applyLayout;
    private applySensors;
    private watchResize;
    private onWindowResize;
    /**
     * Size the backing buffer from the unscaled CSS layout box so ancestor CSS
     * transforms don't shrink the render resolution, while keeping pointer mapping
     * based on the on-screen (possibly scaled) rect.
     */
    private syncSize;
    private context;
    private renderFrame;
    private tick;
    private loop;
    private toCanvas;
    private pointer;
    private onPointerDown;
    private onPointerMove;
    private onPointerUp;
    private onPointerLeave;
    private onClick;
    private onWheel;
    private onKeyDown;
    private onKeyUp;
    private onWindowKeyDown;
    private onWindowKeyUp;
    private onWindowBlur;
    private onWindowScroll;
    private attachEvents;
    private detachEvents;
}

export declare interface ExodeListener {
    objectId: string;
    eventType: string;
    name: string;
}

export declare interface ExodeNavigationEvent {
    type: 'artboard' | 'url' | 'back' | 'next';
    value: string;
}

export declare const ExodeUICanvas: DefineComponent<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
fit: string;
alignment: string;
autoPlay: boolean;
interactive: boolean;
preventScroll: boolean;
highRefreshRate: boolean;
revision: number;
}>>, {
engine: ShallowRef<ExodeUIEngine | null, ExodeUIEngine | null>;
play: () => void | undefined;
pause: () => void | undefined;
seek: (time: number) => void | undefined;
resize: () => void | undefined;
setOptions: (options: Partial<ExodeCanvasOptions>) => void | undefined;
getArtboard: () => Artboard | null;
}, {}, {}, {}, ComponentOptionsMixin, ComponentOptionsMixin, {
toggle: (name: string, checked: boolean) => void;
trigger: (name: string, anim: string) => void;
ready: (engine: ExodeUIEngine) => void;
inputUpdate: (id: string, value: any) => void;
componentChange: (event: ComponentEvent) => void;
inputChange: (name: string, text: string) => void;
inputFocus: (name: string) => void;
inputBlur: (name: string) => void;
buttonClick: (name: string, objectId: string) => void;
navigation: (event: ExodeNavigationEvent) => void;
graphPointClick: (graphId: string, point: any) => void;
log: (message: string, level: "error" | "info" | "warn") => void;
logicUpdate: (state: any) => void;
fpsUpdate: (fps: number) => void;
}, string, PublicProps, Readonly<ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<Props>, {
fit: string;
alignment: string;
autoPlay: boolean;
interactive: boolean;
preventScroll: boolean;
highRefreshRate: boolean;
revision: number;
}>>> & Readonly<{
onToggle?: ((name: string, checked: boolean) => any) | undefined;
onTrigger?: ((name: string, anim: string) => any) | undefined;
onReady?: ((engine: ExodeUIEngine) => any) | undefined;
onInputUpdate?: ((id: string, value: any) => any) | undefined;
onComponentChange?: ((event: ComponentEvent) => any) | undefined;
onInputChange?: ((name: string, text: string) => any) | undefined;
onInputFocus?: ((name: string) => any) | undefined;
onInputBlur?: ((name: string) => any) | undefined;
onButtonClick?: ((name: string, objectId: string) => any) | undefined;
onNavigation?: ((event: ExodeNavigationEvent) => any) | undefined;
onGraphPointClick?: ((graphId: string, point: any) => any) | undefined;
onLog?: ((message: string, level: "error" | "info" | "warn") => any) | undefined;
onLogicUpdate?: ((state: any) => any) | undefined;
onFpsUpdate?: ((fps: number) => any) | undefined;
}>, {
revision: number;
fit: Fit;
alignment: Alignment;
autoPlay: boolean;
interactive: boolean;
preventScroll: boolean;
highRefreshRate: boolean;
}, {}, {}, {}, string, ComponentProvideOptions, true, {}, any>;

export declare class ExodeUIEngine {
    private artboard;
    private objectStates;
    private trailHistories;
    private physicsEngine;
    private physicsFx;
    private physicsFields;
    private activeStateMachine;
    private inputs;
    viewportScrollX: number;
    viewportScrollY: number;
    setViewportScroll(x: number, y: number): void;
    getInputValue(nameOrId: string): any;
    getInput(nameOrId: string): any;
    private inputNameMap;
    private layerStates;
    private pretextCache;
    private pointerHistory;
    private readonly MAX_HISTORY;
    private imageCache;
    private lastValidSvgImgMap;
    private renderFunctionCache;
    private scriptUpdateCache;
    private scriptEffects;
    private sceneApi;
    private animationCodeFunctionCache;
    private maskBuffer;
    private maskCtx;
    private lumaBuffer;
    private lumaCtx;
    private _noiseTileCanvas;
    private layout;
    private onTrigger?;
    private onInputUpdate?;
    private onComponentChange?;
    private onToggle?;
    private onInputChange?;
    private onInputFocus?;
    private onInputBlur?;
    private onLog?;
    private onButtonClick?;
    private onGraphPointClick?;
    private justFiredTriggers;
    private rootTransform;
    private canvasWidth;
    private canvasHeight;
    /** Backing pixels per layout pixel. Set by the host when the canvas is CSS-scaled
     *  (e.g. a preview shrunk to fit) so it can render at its on-screen density. */
    pixelRatio: number | null;
    private getPixelRatio;
    private lastHoveredObjectId;
    private _lastPointerPos;
    private _prevPointerPos;
    private _mouseDelta;
    private _hasSpatialConstraintsApplied;
    private focusedId;
    private draggingSliderId;
    private draggingJoystickId;
    /** Per-pointer joystick drags for multi-touch (pointerId -> joystickId). */
    private joystickPointerMap;
    /** Joysticks currently released with spring return — animated back in processJoysticks. */
    private springingJoysticks;
    private activeDropdownId;
    private activeObjectId;
    private draggingListViewId;
    private draggingListViewIsScrollbar;
    scrollOffset: {
        x: number;
        y: number;
    };
    private _totalScroll;
    private draggingBehaviors;
    private dragStartPointer;
    private dragStartPositions;
    private isMouseDown;
    private activeKeys;
    private pressedKeys;
    private graphHoverStates;
    private barChartRenderedBars;
    private pieChartRenderedSlices;
    private _layoutAnimCache;
    private _springChainState;
    private _emitterPools;
    private _cachedObjectMap;
    private _cachedRootObjects;
    private _cachedObjectMapArtboard;
    private _cachedObjectMapCount;
    private objectVelocities;
    private currentTime;
    private frameCount;
    private entranceStartTimes;
    private fontLeadingFactors;
    private onLogicUpdate?;
    private logicNodeValues;
    private logicNodeState;
    private pointerDownTimes;
    private activeHoverIds;
    private onNavigation?;
    private periodicTriggerTimes;
    private wasInView;
    private scrollProgressLastValue;
    setTriggerCallback(cb: (triggerName: string, animationName: string) => void): void;
    /**
     * Bridge handed to custom effects as env.input / env.setInput / env.emit, so
     * code-drawn elements (e.g. items inside a liquid menu) can read state, drive
     * the state machine and report clicks to the app like native objects do.
     * Created once and reused every frame.
     */
    /**
     * Scene access for effect scripts: keys held, object state, triggers and
     * screen navigation. A CustomEffect whose code defines
     *   function update(env, dt) { … }
     * is called every frame with env = { inputs, input, setInput, emit, params,
     * time, state, scene }. env.state is a plain object kept until the next load.
     */
    private getSceneApi;
    private getLocalPointer;
    private runEffectScripts;
    private getCustomEffectBridge;
    setInputUpdateCallback(cb: (nameOrId: string, value: any) => void): void;
    setComponentChangeCallback(cb: (event: ComponentEvent) => void): void;
    setToggleCallback(cb: (name: string, checked: boolean) => void): void;
    setLogicUpdateCallback(cb: (values: Record<string, any>) => void): void;
    setInputChangeCallback(cb: (name: string, text: string) => void): void;
    setButtonClickCallback(cb: (name: string, objectId: string) => void): void;
    setGraphPointClickCallback(cb: (event: {
        objectId: string;
        componentName: string;
        datasetIndex: number;
        pointIndex: number;
        value: number;
        label: string;
    }) => void): void;
    setNavigationCallback(cb: (target: {
        type: 'artboard' | 'url' | 'back' | 'next';
        value: string;
    }) => void): void;
    private ensurePathPoints;
    private static pathParseCache;
    private svgPathToPoints;
    private parseSvgPath;
    setOnLogCallback(cb: (msg: string) => void): void;
    private debugLog;
    setInputFocusCallback(cb: (name: string) => void): void;
    setInputBlurCallback(cb: (name: string) => void): void;
    updateConstraint(objectId: string, index: number, properties: Partial<Constraint>): void;
    private debug_objectsRendered;
    private debug_objectsTotal;
    private lastRenderTime;
    debugMode: boolean;
    private log;
    private warn;
    constructor();
    private setInternalInput;
    setLayout(fit: Fit, alignment: Alignment, layoutScaleFactor?: number): void;
    getActiveStateIds(layerName?: string): string[];
    getObjectState(id: string): any;
    updateObjectOptions(id: string, newOptions: any): void;
    updateGraphData(nameOrId: string, data: number[] | number[][], categories?: string[]): void;
    updateBarChartData(nameOrId: string, datasets: (number[] | {
        id?: string;
        label?: string;
        data: number[];
        color?: string;
    })[], categories?: string[]): void;
    updatePieChartData(nameOrId: string, slices: (number | {
        id?: string;
        label?: string;
        value: number;
        color?: string;
    })[]): void;
    setDropdownOptions(nameOrId: string, options: string[]): void;
    load(data: Artboard): void;
    /**
     * Pre-loads all images found in the artboard into the image cache.
     * This ensures base64 images from Figma exports are decoded before the first render frame.
     */
    private preloadImages;
    /**
     * Decompresses strings that were compressed during export.
     * Matches the Editor's optimization pipeline.
     */
    private decompressStrings;
    /** [API Variables] Live URL-backed inputs, polled on an interval. */
    private apiPollers;
    private startApiPollers;
    private stopApiPollers;
    /** Manually refresh one API variable by id or name. */
    refreshApiVariable(nameOrId: string): void;
    reset(): void;
    private updateAutoLayout;
    private updateViewportInputs;
    /**
     * Per-breakpoint geometry (`object.breakpointGeometry[breakpointId]`): when the
     * artboard width enters another breakpoint, every object takes that
     * breakpoint's position/size/visibility/type, its position keyframes and
     * interaction targets move by the same delta, and spatial constraints measure
     * from that breakpoint's design width. Captured from real layouts (e.g. the
     * HTML converter rendering a page at each width), so each breakpoint matches.
     */
    private activeGeometryBreakpoint;
    private applyBreakpointGeometry;
    private solveSpatialConstraints;
    private loadFonts;
    private enterStates;
    setInputBool(nameOrId: string, value: boolean): void;
    setInputNumber(nameOrId: string, value: number): void;
    fireTrigger(nameOrId: string): void;
    setInputText(nameOrId: string, value: string): void;
    setInputNumberArray(nameOrId: string, value: number[]): void;
    setInputStringArray(nameOrId: string, value: string[]): void;
    /** Active property tweens and persistent overrides from `applyState` interactions. */
    private interactionTweens;
    private interactionOverrides;
    private readObjectProperty;
    /**
     * `applyState` interaction: optionally set an input, then move a set of object
     * properties to target values over `duration` seconds with `easing`.
     * { action: 'applyState', setInput?: { inputId, value }, duration?, easing?,
     *   properties: [{ objectId, property, value }] }
     */
    private applyInteractionState;
    private stepInteractionStates;
    /** Like updateObjectProperty, but seeds nested containers from the authored object. */
    private writeInteractionProperty;
    updateObjectProperty(id: string, property: string, value: any): void;
    updateInput(nameOrId: string, value: any): void;
    /** Last result per variable-triggered flow rule, for rising-edge firing. */
    private variableRulePassing;
    private evaluateVariableTriggers;
    private evaluateTransitions;
    /**
     * Find a global transition from any state in the layer whose conditions are met.
     * This allows inputs to act as "global listeners" that can trigger state changes
     * from any state, not just the current state.
     *
     * @param layer - The state machine layer to search
     * @param currentStateIds - The currently active state IDs (to skip)
     * @returns The first matching transition, or null if none found
     */
    private findGlobalTransition;
    private checkConditions;
    private evaluateLogicTree;
    private runLogicNodes;
    private resolvePath;
    /**
     * Evaluate a logic-property formula the way the editor does: variable names
     * (project variables and state-machine inputs, `name` or `$name`) are replaced
     * by their live values, then the arithmetic/boolean expression is evaluated.
     */
    private logicFormulaCache;
    private evaluateLogicFormula;
    private processLogicProperties;
    private activeTriggers;
    seek(time: number): void;
    private _pointerSprings;
    private feedPointerInputs;
    private stepPointerSprings;
    advance(dt: number): void;
    private evaluateCodeAnimations;
    private navigationHistory;
    private navigationFiredAt;
    private navigationSnapshot;
    private navigationDepth;
    private navigationPendingLoad;
    private handlingScreenExit;
    private navigationIntent;
    /** Pointer-down position + latest drag delta, used to resolve swipe directions. */
    private navigationGestureStart;
    private navigationGesture;
    private navigationSwipeThreshold;
    /** Rules attached to a layer (`object`) or to the Screen itself (`screen`). */
    private navigationRulesFor;
    private navigationConditionsPass;
    private navigationEventMatches;
    /**
     * Swipe rules only fire when the drag actually moved far enough in the
     * matching direction. Without gesture data (e.g. a programmatic 'Drag'
     * event) the rule stays permissive so existing behaviour is preserved.
     */
    private navigationSwipeMatches;
    private fireNavigation;
    /** Run the first matching rule (rules are ordered; one navigation per event). */
    private runNavigationRules;
    private readNavigationProperty;
    /** Time- and data-driven rules: delay, interval, variable, property change. */
    private evaluateContinuousNavigation;
    private evaluateContinuousInteractions;
    private solveConstraints;
    private getGlobalTransform;
    private globalToLocal;
    private solveIK;
    private computeSpring;
    handlePointerInput(type: string, canvasX: number, canvasY: number, canvasWidth: number, canvasHeight: number, pointerId?: number): void;
    handleScroll(x: number, y: number): void;
    isListViewObject(obj: any): boolean;
    isLineGraphObject(obj: any): boolean;
    isBarChartObject(obj: any): boolean;
    isPieChartObject(obj: any): boolean;
    isGraphObject(obj: any): boolean;
    isInputBoxObject(obj: any): boolean;
    isClickableObject(obj: any): boolean;
    getLastHoveredObject(): any;
    clearAllGraphHover(): void;
    private getLocalCoords;
    private updateGraphHoverFromPointer;
    getGraphHoverState(id: string): any;
    getResolvedListViewItems(obj: any, opts?: any): any[];
    getResolvedDropdownOptions(obj: any, opts?: any): string[];
    handleWheel(deltaX: number, deltaY: number, canvasX?: number, canvasY?: number, canvasWidth?: number, canvasHeight?: number): void;
    private handlePointerEvent;
    handleKeyDown(e: KeyboardEvent): void;
    handleKeyUp(e: KeyboardEvent): void;
    /** Forget held keys: after the window loses focus their keyups never arrive. */
    releaseKeys(): void;
    private hasDragInteraction;
    private clampDragToBounds;
    /** Change a body's physics settings at runtime: buoyancy, tags, orbit, gravityScale, lockRotation… */
    setPhysicsProps(id: string, props: Record<string, any>): void;
    /** Change a field on an object at runtime, e.g. physicsAttractor or physicsFluid. */
    setObjectField(id: string, key: string, value: any): void;
    /** Resize an object and rebuild its physics body in place (for weights that grow with data). */
    resizeBody(id: string, width: number, height: number): void;
    private fireEventForObject;
    private fireAnalyticsEvent;
    private getAnimationDuration;
    private initGlobalAnimationTriggers;
    private resolveInteractionDuration;
    private triggerGlobalAnimation;
    private handleAnimationFinished;
    private getEntranceProgress;
    private getWorldTransform;
    private hitTest;
    private updateSliderValueFromPointer;
    /** Clamp a normalized handle value (-1..1) to the joystick's bounds shape. */
    private clampJoystickToBounds;
    /**
     * Snap a normalized handle value to the nearest of 4 or 8 directions (Rive's
     * "Joy 4-Way" / "Joy 8-Way"). Values below the snap threshold are untouched
     * so the stick can still rest near the centre.
     */
    private snapJoystickDirection;
    /** Apply deadzone + per-axis step snapping to a normalized handle value. */
    private applyJoystickConstraints;
    /**
     * Animate the handle towards (0,0) instead of snapping. Called when an input
     * source stops driving the stick (release, key up, spring return).
     */
    private springJoystickBack;
    /**
     * Read the currently connected Gamepad (if any) and return normalized axis
     * values for the configured stick, or null when no pad / no input.
     */
    private readGamepadStick;
    /**
     * Apply a joystick's rigging animations (xAnimationId / yAnimationId): the
     * handle position scrubs the timeline of the assigned animation, matching the
     * editor preview exactly (delta-from-midpoint so the animation's rest pose at
     * t=duration/2 is the un-deflected result).
     */
    private applyJoystickRigging;
    /**
     * Detect bindings that were applied on a previous frame but have since been
     * removed from the joystick, and restore each target object to the value it
     * had before the binding started driving it.
     */
    private reconcileJoystickBindings;
    /**
     * Put a bound target back at its base value (the value the binding reads as
     * its origin) and drop the velocity/smoothing integration caches so a later
     * re-bind starts cleanly instead of continuing from a stale offset.
     */
    private restoreJoystickBindingTarget;
    private updateJoystickValueFromPointer;
    private processJoysticks;
    private _index;
    private lookupIndex;
    private objById;
    private animById;
    applyBlendState(state: any, time: number): void;
    applyAnimation(anim: Animation_2, time: number, filterObjectId?: string | string[]): void;
    private interpolate;
    private interpolateValue;
    private interpolateColor;
    private interpolateStops;
    private interpolateFill;
    private interpolateStroke;
    render(ctx: CanvasRenderingContext2D, width: number, height: number): void;
    private isObjectInView;
    private calculateTransform;
    private mapFontWeight;
    private drawTextDecoration;
    private renderObject;
    private applyLightTrailUnderlay;
    private applyOuterGlowUnderlay;
    private _renderText;
    private applyStrokeAlignment;
    private getPerimeter;
    private getBezierLength;
    private getBezierTAtLength;
    private getPointOnPath;
    private getBezierPointAndAngle;
    private applyAbsoluteTransform;
    private applyObjectTransform;
    private applyCustomEffect;
    private applyPatternGrid;
    private applyInnerGlowOverlay;
    private applyArtEffectOverlay;
    /** Helper: shift the hue of a hex/hsl color by degrees, return as hsla */
    private _shiftHue;
    /**
     * Simulate CSS `backdrop-filter: blur()` + glass overlay on Canvas2D.
     * Since real backdrop-filter is not available in canvas, we:
     * 1. Sample the canvas pixels behind this object's bounding box
     * 2. Draw them into an offscreen canvas and apply a blur filter
     * 3. Clip to the object shape and paint the blurred backdrop
     * 4. Apply the overlay color tint, sheen highlight, noise grain, and glass border
     */
    private applyBackgroundBlurGlass;
    /**
     * Paint a mask source into the context preserving its real alpha.
     *
     * The caller composites this with destination-in / destination-out, so only the
     * alpha channel matters and the source has to be drawn the way it actually
     * renders: fill *and* stroke (a Line or a fill:None shape has no fillable area
     * and used to erase the masked layer), real bitmap alpha for images, glyphs for
     * text, artwork for SVG and the union of a group's children.
     *
     * The node's own transform is applied here, so the caller must already have
     * applied the node's ancestors; that nesting is what keeps the children of a
     * group mask from being transformed twice.
     */
    private paintMaskSource;
    private applyPath;
    private _tracePath;
    private renderInputBox;
    private renderSlider;
    private renderDropdown;
    private renderButton;
    private drawButtonIcon;
    private renderToggleButton;
    private renderToggle;
    private renderCheckbox;
    private renderRadioGroup;
    private renderBarChart;
    private renderPieChart;
    private renderJoystick;
    private getRadioGroupItemIndexAtPointer;
    private renderLineGraph;
    private _catmullRom;
    private normalizeOpacity;
    private createCanvasFill;
    private drawRoundRect;
    private renderListView;
    private drawCustomShape;
    private updateListViewScrollFromPointer;
    private updateListViewHoverFromPointer;
    private getListViewItemIndexAtPointer;
    private drawListViewRect;
    private solveBehaviors;
    private applyBehaviorSensor;
    private getObjectProperty;
    private setObjectProperty;
    private applyEasing;
    private lerp;
    private deepMerge;
    private processFabricAdjustmentsCanvas;
    private renderFittedImage;
}

export declare interface Fill {
    type: 'Solid' | 'LinearGradient' | 'RadialGradient' | 'AngularGradient' | 'DiamondGradient' | 'Pattern' | 'None';
    color?: string;
    opacity: number;
    stops?: {
        offset: number;
        color: string;
        opacity?: number;
    }[];
    start?: [number, number];
    end?: [number, number];
    center?: [number, number];
    radius?: number;
    url?: string;
    scaleX?: number;
    scaleY?: number;
    offsetX?: number;
    offsetY?: number;
    rotation?: number;
    gradientTransform?: number[];
}

export declare type Fit = 'Cover' | 'Contain' | 'Fill' | 'FitWidth' | 'FitHeight' | 'None' | 'ScaleDown' | 'Layout';

export declare type Geometry = {
    type: 'Rectangle';
    width: number;
    height: number;
    corner_radius?: number | [number, number, number, number] | {
        tl?: number;
        tr?: number;
        br?: number;
        bl?: number;
    };
    cornerRadius?: number | [number, number, number, number] | {
        tl?: number;
        tr?: number;
        br?: number;
        bl?: number;
    };
    isMask?: boolean;
} | {
    type: 'Ellipse';
    width: number;
    height: number;
    startAngle?: number;
    sweepAngle?: number;
    ratio?: number;
    isMask?: boolean;
} | {
    type: 'Text';
    text: string;
    fontSize: number;
    fontFamily: string;
    fontWeight?: string | number;
    textAlign?: 'left' | 'center' | 'right' | 'justify';
    textVerticalAlign?: 'top' | 'middle' | 'center' | 'bottom';
    width?: number;
    height?: number;
    lineHeight?: number;
    letterSpacing?: number;
    textDecoration?: 'none' | 'underline' | 'line-through';
    textCase?: 'none' | 'uppercase' | 'lowercase' | 'capitalize';
    paragraphSpacing?: number;
    paragraphIndent?: number;
    textInputId?: string;
    segments?: {
        text: string;
        fill: Fill;
        fontSize?: number;
        fontFamily?: string;
        fontWeight?: string | number;
        fontStyle?: 'normal' | 'italic';
        textDecoration?: 'none' | 'underline' | 'line-through';
    }[];
    enableSegments?: boolean;
    isMask?: boolean;
    textPre?: string;
    textPost?: string;
    isTextVarEnabled?: boolean;
    pathId?: string;
    pathOffset?: number;
    pathOffsetY?: number;
    pathAlign?: 'baseline' | 'top' | 'bottom' | 'center';
    pathSide?: 'left' | 'right';
    typewriter?: {
        options: {
            speed: number;
            loop: boolean;
        };
        isEnabled: boolean;
    };
    fontStyle?: 'normal' | 'italic';
    isPointText?: boolean;
    autoHeight?: boolean;
    padding?: {
        top?: number;
        right?: number;
        bottom?: number;
        left?: number;
    };
    smallCaps?: boolean;
    baselineShift?: number;
    hyphenation?: boolean;
    composer?: 'single-line' | 'every-line';
    balanceRaggedLines?: boolean;
    kerning?: 'auto' | 'optical' | 'manual' | 'none';
    kerningValue?: number;
    justifyMinWordSpacing?: number;
    justifyMaxWordSpacing?: number;
    justifyMinLetterSpacing?: number;
    justifyMaxLetterSpacing?: number;
    paragraphRule?: {
        top?: {
            width: number;
            color: string;
            offset: number;
        };
        bottom?: {
            width: number;
            color: string;
            offset: number;
        };
    };
    pathFlip?: boolean;
} | {
    type: 'Triangle';
    width: number;
    height: number;
    isMask?: boolean;
} | {
    type: 'Polygon';
    radius: number;
    sides: number;
    isMask?: boolean;
} | {
    type: 'Star';
    inner_radius: number;
    outer_radius: number;
    points: number;
    isMask?: boolean;
} | {
    type: 'Line';
    length: number;
    isMask?: boolean;
} | {
    type: 'SVG';
    svgContent: string;
    width: number;
    height: number;
    preserveAspectRatio: boolean;
    colors: string[];
} | {
    type: 'Image';
    src: string;
    width: number;
    height: number;
    adjustments?: Adjustments;
} | {
    type: 'Joystick';
    width: number;
    height: number;
    isMask?: boolean;
    stepX?: number;
    stepY?: number;
    deadzone?: number;
    boundsShape?: 'circle' | 'square';
    handleOrigin?: 'center' | 'top-left' | 'bottom-right';
    options?: any;
} | {
    type: "LineGraph";
    datasets?: LineDataset[];
    data?: number[];
    width: number;
    height: number;
    lineColor?: string;
    lineWidth?: number;
    showArea?: boolean;
    areaColor?: string;
    smoothing?: boolean;
    showPoints?: boolean;
    pointSize?: number;
    pointFill?: string;
    pointStrokeColor?: string;
    pointStrokeWidth?: number;
    showXAxis?: boolean;
    showYAxis?: boolean;
    xAxisColor?: string;
    yAxisColor?: string;
    showXLabels?: boolean;
    showYLabels?: boolean;
    axisLabelColor?: string;
    axisLabelFontSize?: number;
    showLegend?: boolean;
    legendColor?: string;
    legendFontSize?: number;
    areaOpacity?: number;
} | {
    type: 'Component';
    variant: string;
    width: number;
    height: number;
} | {
    type: 'Path';
    points: (any & {
        moveTo?: boolean;
    })[];
    isMask?: boolean;
    isClosed?: boolean;
    is_closed?: boolean;
};

export declare const getToggleSvgPathBounds: (d: string) => {
    minX: number;
    minY: number;
    maxX: number;
    maxY: number;
    width: number;
    height: number;
    cx: number;
    cy: number;
};

export declare interface Input {
    id: string;
    name: string;
    value: InputValue;
    x?: number;
    y?: number;
    nodes?: InputNodePosition[];
    sourceId?: string;
    sourceHandleId?: string;
}

export declare interface InputNodePosition {
    id: string;
    x: number;
    y: number;
}

export declare type InputValue = {
    type: 'Boolean';
    value: boolean;
} | {
    type: 'Number';
    value: number;
} | {
    type: 'Trigger';
    value: boolean;
} | {
    type: 'Text';
    value: string;
} | {
    type: 'Object';
    value: string;
} | {
    type: 'Api';
    value: any;
    api: ApiVariableConfig;
};

export declare interface Interaction {
    id: string;
    event: 'onClick' | 'onHold' | 'pointerDown' | 'pointerUp' | 'hover' | string;
    action: 'setInput' | 'fireTrigger' | 'setProperty' | 'Navigate Artboard' | 'Navigate URL' | 'navigate' | 'Play Animation' | 'Stop Animation' | 'Pause Animation' | 'Switch to State' | 'Toggle Boolean' | string;
    targetInputId?: string;
    targetProperty?: string;
    targetObjectId?: string;
    targetArtboard?: string;
    targetState?: string;
    navigateUrl?: string;
    value?: any;
    targetAnimationId?: string;
    /** Number input that supplies the requested playback duration in milliseconds. */
    transitionDurationInputId?: string;
    /** Literal playback duration in milliseconds when no input is bound. */
    transitionDuration?: number;
    easingCurve?: string;
    subAnimationIds?: string[];
    playMode?: 'single' | 'all' | 'custom';
    triggers?: string[];
    triggerLogic?: 'OR' | 'AND';
    conditions?: Condition[];
    delayValue?: number;
    intervalValue?: number;
}

/** JSDOM/happy-dom friendly guard so tests can construct a runtime safely. */
export declare function isCanvasElement(el: unknown): el is HTMLCanvasElement;

/**
 * Validates that property paths do not contain prototype pollution vectors (__proto__, constructor, prototype).
 */
export declare function isSafePropertyPath(path: string | undefined | null): boolean;

/**
 * Validates that URLs do not use dangerous schemes like javascript:, vbscript:, or data:
 */
export declare function isSafeUrl(url: string | undefined | null): boolean;

export declare type JustifyContent = 'flex-start' | 'center' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';

declare interface Keyframe_2 {
    time: number;
    value: number | string;
    easing: string;
}
export { Keyframe_2 as Keyframe }

export declare interface Layer {
    name: string;
    entryStateId: string;
    entryConditions?: Condition[];
    states: State[];
}

export declare interface Layout {
    fit: Fit;
    alignment: Alignment;
    layoutScaleFactor?: number;
}

export declare type LayoutAlign = 'top-left' | 'top-center' | 'top-right' | 'center-left' | 'center' | 'center-right' | 'bottom-left' | 'bottom-center' | 'bottom-right';

export declare interface LayoutBreakpoint {
    id: string;
    /** Human label, e.g. "Mobile" / "Tablet" / "Desktop". */
    name: string;
    /** Inclusive lower bound of the device width (px) this breakpoint starts at. */
    minWidth: number;
    /** Optional inclusive upper bound. Omitted means "and wider". */
    maxWidth?: number;
    /**
     * @deprecated Inline overrides on a per-container definition. Overrides now
     * live on `layoutProps.responsive[id]`. Still honoured for older documents.
     */
    props?: Partial<Omit<LayoutProps, 'breakpoints' | 'responsive'>>;
}

export declare type LayoutDirection = 'horizontal' | 'vertical' | 'horizontal-reverse' | 'vertical-reverse';

export declare type LayoutMode = 'none' | 'linear' | 'grid' | 'stack' | 'frame' | 'flow' | 'masonry' | 'anchor';

export declare interface LayoutProps {
    width?: ResizingMode;
    height?: ResizingMode;
    layoutSizingHorizontal?: ResizingMode;
    layoutSizingVertical?: ResizingMode;
    minWidth?: number;
    minHeight?: number;
    maxWidth?: number;
    maxHeight?: number;
    gridArea?: string;
    /** Flexbox grow factor. `fill` sizing implies 1 when this is unset. */
    flexGrow?: number;
    /** Flexbox shrink factor. `fill` sizing implies 1 when this is unset. */
    flexShrink?: number;
    /** Flexbox base size along the main axis. */
    flexBasis?: number;
    /** Per-item cross-axis alignment, overriding the container's alignItems. */
    alignSelf?: AlignItems;
    /**
     * How this object lays out its children. Absent or `'none'` leaves children
     * at their authored positions; `'linear'` is flexbox, `'grid'` is the track
     * grid. There is no separate on/off flag — layout is just a property.
     */
    mode?: LayoutMode;
    direction?: LayoutDirection;
    /** @deprecated Use `gap` (or rowGap/columnGap) instead. */
    spacing?: number | 'auto';
    /** Gap between items on the main axis; falls back to rowGap/columnGap, then spacing. */
    gap?: number | 'auto';
    columnGap?: number;
    rowGap?: number;
    gridColumns?: string;
    gridRows?: string;
    padding?: {
        top: number;
        right: number;
        bottom: number;
        left: number;
    };
    /** @deprecated Use justifyContent/alignItems instead. */
    align?: LayoutAlign;
    justifyContent?: JustifyContent;
    alignItems?: AlignItems;
    alignContent?: AlignContent;
    wrap?: boolean;
    /**
     * @deprecated Legacy inline breakpoint *definitions* on a container. The
     * shared set now lives on `artboard.responsive.breakpoints`; this is still
     * honoured so older documents keep rendering.
     */
    breakpoints?: LayoutBreakpoint[];
    /**
     * Per-breakpoint overrides, keyed by the shared breakpoint id. Resolved
     * against the device (artboard) width, so every container switches its
     * layout at the same breakpoints.
     */
    responsive?: Record<string, Partial<Omit<LayoutProps, 'breakpoints' | 'responsive' | 'padding'>> & {
        /** Padding overrides merge per side — set only the edges you change. */
        padding?: Partial<NonNullable<LayoutProps['padding']>>;
    }>;
}

export declare interface LineDataset {
    id: string;
    label: string;
    data: number[];
    lineColor: string;
    lineWidth: number;
    showArea: boolean;
    areaColor: string;
    smoothing: boolean;
    showPoints: boolean;
    pointSize: number;
    pointFill: string;
    pointStrokeColor: string;
    pointStrokeWidth: number;
    inputId?: string;
    isVarEnabled?: boolean;
}

/**
 * Liquid Fill - Shapes that fill like pouring liquid
 */
export declare interface LiquidFillConfig {
    enabled: boolean;
    fillLevel: number;
    waveAmplitude: number;
    waveFrequency: number;
    color: string;
    opacity: number;
    direction?: 'up' | 'down' | 'left' | 'right';
}

/**
 * Liquid Morphing - Blob-like deformations for shapes
 */
export declare interface LiquidMorphConfig {
    enabled: boolean;
    blobStrength: number;
    frequency: number;
    amplitude?: number;
    seed?: number;
}

export declare interface LogicNode {
    id: string;
    name: string;
    op: LogicOp;
    x: number;
    y: number;
    inputs: {
        id: string;
        sourceId?: string;
        sourceHandleId?: string;
        value?: any;
    }[];
    value?: any;
    label?: string;
}

export declare enum LogicOp {
    AND = "AND",
    OR = "OR",
    NOT = "NOT",
    XOR = "XOR",
    OBJECT = "OBJECT",
    PROPERTY = "PROPERTY",
    GET_PROPERTY = "GET_PROPERTY",
    SET_PROPERTY = "SET_PROPERTY",
    ADD = "ADD",
    SUB = "SUB",
    MUL = "MUL",
    DIV = "DIV",
    MOD = "MOD",
    POW = "POW",
    ABS = "ABS",
    ROUND = "ROUND",
    FLOOR = "FLOOR",
    CEIL = "CEIL",
    SIN = "SIN",
    COS = "COS",
    TAN = "TAN",
    CLAMP = "CLAMP",
    REMAP = "REMAP",
    EQ = "EQ",
    NEQ = "NEQ",
    GT = "GT",
    LT = "LT",
    GTE = "GTE",
    LTE = "LTE",
    IF_ELSE = "IF_ELSE",
    VALUE = "VALUE",
    INPUT = "INPUT",
    LOG = "LOG",
    SCROLL_X = "SCROLL_X",
    SCROLL_Y = "SCROLL_Y",
    MOUSE_X = "MOUSE_X",
    MOUSE_Y = "MOUSE_Y",
    IS_MOUSE_DOWN = "IS_MOUSE_DOWN",
    EFFECTOR = "EFFECTOR",
    MONITOR = "MONITOR",
    DELAY = "DELAY",
    SPRING_PULL = "SPRING_PULL",
    SPRING_SETTLE = "SPRING_SETTLE",
    EMIT = "EMIT"
}

export declare interface LogicProperty {
    id: string;
    name: string;
    valueType: 'variable' | 'constant' | 'expression';
    variableId?: string;
    value?: any;
}

export declare interface NavigationCondition {
    inputId: string;
    operator: '==' | '!=' | '>' | '<' | '>=' | '<=';
    value: any;
}

/**
 * A Screen-to-Screen navigation rule.
 *
 * Rules live on the Screen (`artboard.navigation`) and are either attached to an
 * object (`objectId` set) or screen-level (`objectId` null: load/exit/timing/data).
 */
export declare interface NavigationRule {
    id: string;
    name?: string;
    enabled?: boolean;
    trigger: NavigationTriggerType;
    objectId?: string | null;
    conditions?: NavigationCondition[];
    conditionLogic?: 'AND' | 'OR';
    property?: string;
    delayMs?: number;
    intervalMs?: number;
    target: NavigationTarget;
    targetScreenId?: string | null;
    url?: string;
    transition?: NavigationTransition;
    duration?: number;
}

/** Where a navigation rule goes. */
export declare type NavigationTarget = 'screen' | 'back' | 'next' | 'url';

export declare type NavigationTransition = 'none' | 'fade' | 'slideLeft' | 'slideRight' | 'slideUp' | 'slideDown' | 'zoom';

/** What starts a navigation rule (mirrors the editor's NavigationRule.trigger). */
export declare type NavigationTriggerType = 'click' | 'doubleClick' | 'rightClick' | 'hover' | 'hoverOut' | 'press' | 'release' | 'longPress' | 'swipeLeft' | 'swipeRight' | 'swipeUp' | 'swipeDown' | 'scrollIntoView' | 'variable' | 'propertyChange' | 'visible' | 'hidden' | 'toggle' | 'delay' | 'interval' | 'screenLoad' | 'screenExit' | 'animationEnd' | 'stateEnter';

export declare interface Physics {
    enabled: boolean;
    bodyType: 'Dynamic' | 'Static';
    mass: number;
    density: number;
    friction: number;
    restitution: number;
    frictionAir: number;
    isSensor: boolean;
}

/**
 * Physics Effects — visual effects driven by the physics simulation.
 *
 * Turn them on for every falling body with `artboard.physics.effects`, and override or opt out
 * per object with `object.physicsEffects` (an object to override, `false` to disable):
 *
 *   physics.effects = {
 *     squash: { amount: 1 },                         // stretch along motion, squash on impact
 *     trail:  { length: 6, opacity: 0.3 },           // afterimages behind fast bodies
 *     impact: { color: '#FFFFFF', size: 1 },          // shockwave ring where a body hits
 *     dust:   { color: '#CFC8BE', count: 10 },        // particles on hard landings
 *     heat:   { color: '#FF6B3D', maxSpeed: 1600 },   // glow that grows with speed
 *     shadow: { opacity: 0.35, groundY: 820 },        // contact shadow on the ground
 *     shake:  { amount: 1 },                          // artboard shake on heavy impacts
 *   }
 *
 * Each effect is on when its key is present (set `enabled: false` to switch one off).
 * Impacts are detected from sudden velocity changes, so no collision setup is needed.
 */
declare interface PhysicsEffectsConfig {
    squash?: {
        enabled?: boolean;
        amount?: number;
    };
    trail?: {
        enabled?: boolean;
        length?: number;
        opacity?: number;
        minSpeed?: number;
    };
    impact?: {
        enabled?: boolean;
        color?: string;
        size?: number;
        minSpeed?: number;
    };
    dust?: {
        enabled?: boolean;
        color?: string;
        count?: number;
        minSpeed?: number;
    };
    heat?: {
        enabled?: boolean;
        color?: string;
        maxSpeed?: number;
        blur?: number;
    };
    shadow?: {
        enabled?: boolean;
        opacity?: number;
        groundY?: number;
        color?: string;
    };
    shake?: {
        enabled?: boolean;
        amount?: number;
    };
}

export declare interface PlayInstance {
    id: string;
    trigger: 'on_load' | 'after_delay' | 'after_anim' | 'on_scroll' | 'manual';
    delay?: number;
    afterAnim?: string;
    conditions?: {
        variable: string;
        operator: string;
        value: any;
    }[];
    subAnimationIds?: string[];
    loop?: boolean;
}

declare interface Props extends ExodeCanvasOptions {
    style?: CSSProperties;
}

export declare interface RepeaterConfig {
    isEnabled: boolean;
    type: 'Linear' | 'Grid' | 'Radial';
    count: number;
    offsetX?: number;
    offsetY?: number;
    rotation?: number;
    scale?: number;
    cols?: number;
    gapX?: number;
    gapY?: number;
    radius?: number;
    startAngle?: number;
    endAngle?: number;
}

export declare type ResizingMode = 'fixed' | 'hug' | 'fill';

export declare interface ResponsiveConfig {
    enabled: boolean;
    mode: 'fixed' | 'hug' | 'fill' | 'constraint';
    width?: {
        min?: number;
        max?: number;
        type: 'percentage' | 'fixed';
    };
    height?: {
        min?: number;
        max?: number;
        type: 'percentage' | 'fixed';
    };
    maintainAspectRatio: boolean;
    scaleObjects: boolean;
    /** The document-wide breakpoint set, shared by every container. */
    breakpoints?: LayoutBreakpoint[];
}

export declare interface SEOConfig {
    title?: string;
    description?: string;
    keywords?: string[];
    ogImage?: string;
    jsonLd?: any;
    /**
     * By default, we extract all text objects for semantic HTML.
     * Set this to false to only use explicitly provided metadata.
     */
    enableSmartExtraction?: boolean;
}

export declare interface Shadow {
    color: string;
    blur: number;
    offsetX: number;
    offsetY: number;
    opacity: number;
    isEnabled?: boolean;
    spread?: number;
}

export declare interface ShapeObject {
    type: 'Shape' | 'Group' | 'Component' | 'Button' | 'Bone' | 'Toggle' | 'Slider' | 'Dropdown' | 'ListView' | 'Checkbox' | 'RadioGroup' | 'BarChart' | 'PieChart';
    id: string;
    name: string;
    transform: Transform;
    geometry?: Geometry;
    style: Style;
    parentId?: string;
    children?: string[];
    triggers?: Trigger[];
    interactions?: Interaction[];
    constraints?: Constraint[];
    spatialConstraints?: SpatialConstraint;
    physics?: Physics;
    renderAsGroup?: boolean;
    opacity?: number;
    visible?: boolean;
    isVisible?: boolean;
    blendMode?: string;
    compositeOperation?: string;
    options?: any;
    inputId?: string;
    maskedBy?: string;
    maskInverted?: boolean;
    maskOpacity?: number;
    maskFeather?: number;
    maskType?: 'alpha' | 'luma';
    maskBlendMode?: string;
    behaviors?: Behavior[];
    liquidMorph?: LiquidMorphConfig;
    liquidFill?: LiquidFillConfig;
    artEffect?: ArtEffectConfig;
    width?: number;
    height?: number;
    cornerRadius?: number | [number, number, number, number];
    clipContent?: boolean;
    layoutProps?: LayoutProps;
    altText?: string;
    repeaterConfig?: RepeaterConfig;
    weights?: {
        [vertexIndex: string | number]: {
            boneId: string;
            amount: number;
        }[];
    };
    bindMatrices?: {
        [boneId: string]: number[];
    };
    logicProperties?: LogicProperty[];
    codeAnimation?: any;
    codeAnimations?: any[];
    data?: any;
}

export declare interface SpatialConstraint {
    horizontal?: 'left' | 'right' | 'left-right' | 'center' | 'scale';
    vertical?: 'top' | 'bottom' | 'top-bottom' | 'center' | 'scale';
    relativeTo?: string;
    offsetX?: number;
    offsetY?: number;
    minWidth?: number;
    maxWidth?: number;
    minHeight?: number;
    maxHeight?: number;
    lockAspectRatio?: boolean;
}

export declare interface State {
    id: string;
    name: string;
    x: number;
    y: number;
    transitions: Transition[];
    animationId?: string | null;
    loop?: boolean;
    isBlendState?: boolean;
    blendType?: '1D' | '2D';
    blendAnimations?: BlendAnimation[];
    blendInputX?: string;
    blendInputY?: string;
    speed?: number;
    onEntry?: StateAction[];
    onExit?: StateAction[];
}

export declare interface StateAction {
    type: 'SetInput' | 'FireTrigger';
    inputId: string;
    value?: boolean | number;
}

export declare interface StateMachine {
    inputs: Input[];
    layers: Layer[];
    logicNodes?: LogicNode[];
    listeners?: EventListener_2[];
}

export declare interface Style {
    fill?: Fill;
    stroke?: {
        color?: string;
        fill?: Fill;
        width: number;
        opacity: number;
        alignment?: 'center' | 'inside' | 'outside';
        lineCap?: 'butt' | 'round' | 'square';
        lineJoin?: 'miter' | 'round' | 'bevel';
        miterLimit?: number;
        dashArray?: number[];
        dashOffset?: number;
        trimStart?: number;
        trimEnd?: number;
        trimOffset?: number;
        isEnabled?: boolean;
    };
    shadow?: Shadow;
    blur?: Blur;
    adjustments?: Adjustments;
    liquidMorph?: LiquidMorphConfig;
    liquidFill?: LiquidFillConfig;
    artEffect?: ArtEffectConfig;
    palette?: string[];
    analytics?: AnalyticsConfig;
    compositeOperation?: GlobalCompositeOperation | string;
}

export declare const TOGGLE_SHAPE_NAME_MAP: Record<string, string>;

export declare interface Track {
    object_id: string;
    property: string;
    keyframes: Keyframe_2[];
}

export declare interface Transform {
    x: number;
    y: number;
    rotation: number;
    scale_x: number;
    scale_y: number;
    opacity?: number;
    skew_x?: number;
    skew_y?: number;
    flip_x?: boolean;
    flip_y?: boolean;
}

export declare interface Transition {
    id: string;
    targetStateId: string;
    duration: number;
    delay?: number;
    conditions: Condition[];
}

export declare interface Trigger {
    id: string;
    name: string;
    eventType: 'onClick' | 'onHold' | 'pointerDown' | 'pointerUp' | 'hover';
    entryAnimationId?: string | null;
    exitAnimationId?: string | null;
    targetObjectId?: string | null;
    duration?: number;
    loop?: boolean;
    conditions?: Condition[];
}

/**
 * Composable that mirrors the React `useExodeUI` hook: pass the engine from the
 * canvas `@ready` event to `setEngine`, then drive inputs and data from anywhere.
 */
export declare function useExodeUI(): {
    engine: ShallowRef<ExodeUIEngine | null>;
    setEngine: (e: ExodeUIEngine | null) => void;
    updateInput: (nameOrId: string, value: any) => void | undefined;
    setInputValue: (nameOrId: string, value: any) => void | undefined;
    setInputBool: (name: string, value: boolean) => void | undefined;
    setInputNumber: (name: string, value: number) => void | undefined;
    setInputText: (name: string, value: string) => void | undefined;
    setInputNumberArray: (name: string, value: number[]) => void | undefined;
    setInputStringArray: (name: string, value: string[]) => void | undefined;
    fireTrigger: (name: string) => void | undefined;
    updateObjectOptions: (id: string, opts: any) => void | undefined;
    updateConstraint: (id: string, index: number, props: any) => void | undefined;
    updateGraphData: (nameOrId: string, data: number[] | number[][], categories?: string[]) => void | undefined;
    updateBarChartData: (nameOrId: string, datasets: (number[] | {
        id?: string;
        label?: string;
        data: number[];
        color?: string;
    })[], categories?: string[]) => void | undefined;
    updatePieChartData: (nameOrId: string, slices: (number | {
        id?: string;
        label?: string;
        value: number;
        color?: string;
    })[]) => void | undefined;
    setDropdownOptions: (nameOrId: string, options: string[]) => void | undefined;
    getInputValue: (nameOrId: string) => any;
};

export { }
