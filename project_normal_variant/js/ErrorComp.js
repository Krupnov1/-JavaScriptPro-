Vue.component('error', {
    data() {
        return {
            text: ""
        }  
    },

    methods: {
        errorMessage(error) {
           this.text = error
        }
    },

    computed: {
        isVisible() {
            return this.text !== ""
        }
    },

    template: `<div class="error-block" v-if="isVisible">
                    <p class="error-msg">
                        <button class="error-btn" @click="errorMessage('')">&times;</button>
                        {{ text }}
                    </p>
                </div>` 
});

