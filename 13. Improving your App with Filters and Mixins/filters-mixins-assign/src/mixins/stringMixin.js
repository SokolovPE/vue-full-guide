export const stringMixin = {
    data() {
        return {
            mixinText: 'Text from Mixin...'
        };
    },
    computed: {
        mixinReverseComp() {
            return this.mixinText
                .split('')
                .reverse()
                .join('');
        },
        mixinAppendLengthComp() {
            return `${this.mixinText} (${this.mixinText.length})`;
        }
    }
};
