<template>
    <div ref="container" class="monaco-editor" :style="`height: ${height}px`"></div>
</template>

<script>
import * as monaco from 'monaco-editor'
export default {
    name: 'AcMonaco',
    props: {
        opts: {
            type: Object,
            default: () => ({})
        },
        height: {
            type: Number,
            default: 300
        }
    },
    data () {
        return {
            defaultOpts: {
                value: '',
                theme: 'vs',
                roundedSelection: true,
                autoIndent: true,
            },
            monacoEditor: {}
        }
    },
    watch: {
        opts: {
            handler () {
                this.initMonaco()
            },
            deep: true
        }
    },
    mounted () {
        this.initMonaco()
    },
    methods: {
        initMonaco () {
            this.$refs.container.innerHTML = ''
            let editorOptions = Object.assign({}, this.defaultOpts, this.opts)
            this.monacoEditor = monaco.editor.create(this.$refs.container, editorOptions)
            this.monacoEditor.onDidChangeModelContent(() => {
                this.$emit('change', this.monacoEditor.getValue())
            })
        },
        getVal () {
            return this.monacoEditor.getValue()
        }
    }
}
</script>