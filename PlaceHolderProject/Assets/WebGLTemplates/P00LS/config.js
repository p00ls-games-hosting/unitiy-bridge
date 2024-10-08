export const p00lsConfiguration = {
    apiKey: "{{{ P00LS_API_KEY }}}",
    appId: "{{{ P00LS_APP_ID }}}",
    env: "{{{ P00LS_ENV }}}",
    gameId: "{{{ P00LS_GAME_ID }}}",
    gameVersion: {{{ JSON.stringify(PRODUCT_VERSION) }}},
    #if P00LS_BLOCK_ID
    blockId: "{{{ P00LS_BLOCK_ID }}}",
    #endif
};

export const sdkVersion = "{{{ P00LS_SDK_VERSION }}}";

const buildUrl = "Build";

export const unityConfiguration = {
    arguments: [],
    dataUrl: buildUrl + "/{{{ DATA_FILENAME }}}",
    frameworkUrl: buildUrl + "/{{{ FRAMEWORK_FILENAME }}}",
    #if USE_THREADS
    workerUrl: buildUrl + "/{{{ WORKER_FILENAME }}}",
    #endif
    #if USE_WASM
    codeUrl: buildUrl + "/{{{ CODE_FILENAME }}}",
    #endif
    #if SYMBOLS_FILENAME
    symbolsUrl: buildUrl + "/{{{ SYMBOLS_FILENAME }}}",
    #endif
    streamingAssetsUrl: "StreamingAssets",
    companyName: {{{ JSON.stringify(COMPANY_NAME) }}},
    productName: {{{ JSON.stringify(PRODUCT_NAME) }}},
    productVersion: {{{ JSON.stringify(PRODUCT_VERSION) }}}
}

export const loaderUrl = buildUrl + "/{{{ LOADER_FILENAME }}}";