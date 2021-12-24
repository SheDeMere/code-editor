import React, {useContext} from 'react';
import AceEditor from "react-ace";
import "ace-builds/src-min-noconflict/mode-javascript"
import "ace-builds/src-min-noconflict/theme-monokai"
import "ace-builds/src-min-noconflict/snippets/javascript"
import "ace-builds/src-min-noconflict/ext-language_tools"
import {EditorContext} from "../../context/Context";
const JsEditor = () => {
    const {js, setJs} = useContext(EditorContext)
    return (
        <AceEditor
            value={js}
            onChange={value => setJs(value)}
            placeholder='Введите JavaScript код'
            mode='javascript'
            theme='monokai'
            name='editor_js'
            fontSize={16}
            height={'100%'}
            width={'100%'}
            showPrintMargin={true}
            showGutter={false}
            highLightActiveLine={true}
            setOptions = {{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                enableSnippets: true,
                tabSize: 2
            }}
        />
    );
};

export default JsEditor;