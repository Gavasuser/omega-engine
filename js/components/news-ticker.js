Vue.component("news-ticker", {
    data: function()
    {
        return {
            messages: [
                "i know where you live",
                "alphabetagammadeltaepsilonzetaetathetaiotakappalambda...",
                "are you Σ?",
                "hey Λ-sauce , michal here",
                "10110010101101001101001- omega layers",
                "soft-ϰ-ed",
                "did you know this message has the same chances of coming up as every other one? ",
                "Θ / 2 = 42",
                "BURNNNNNNNNNN",
                "im the Α, im the leader, im the one to trust",
                "what if i told you that secret achievements are not real",
                "omega layers 2, coming in 2^^108 years",
                "do you ever stop to think about your criminal record?",
                "go visit omega layers 2 and sussy layers ez",
                "what do you call it when a greek river splits?",
                "content men",
                "a δ"
            ],
            currentMessage: "",
            messageIndex: -1
        }
    },
    computed: {
        animationDuration: function()
        {
            return 10 + 0.1 * this.currentMessage.replace(/<.*?>/g, "").length;
        }
    },
    methods: {
        getMessage: function()
        {
            const arr = Array.from(this.messages);
            if(this.messageIndex !== -1)
            {
                arr.splice(this.messageIndex, 1);
            }
            const index = Math.floor(Math.random() * arr.length);
            this.messageIndex = index;
            const element = arr[index];
            this.currentMessage = typeof element === "string" ? element : element();
        }
    },
    mounted: function()
    {
        this.getMessage();
        this.$refs.message.onanimationiteration = e =>
        {
            const anim = this.$refs.message.style.animation.slice();
            this.getMessage();
            this.$refs.message.style.animation = "none";
            void this.$refs.message.offsetWidth; //very black magic
            this.$refs.message.style.animation = anim;
            Vue.nextTick(() =>
            {
                if(this.$refs.message.style.animationDuration === "")
                {
                    this.$refs.message.style.animationDuration = this.animationDuration + "s";
                }
            });
        };
    },
    template: `<div class="news-ticker">
    <span ref="message" :style="{'animation-duration': animationDuration + 's'}" v-html="currentMessage"></span>
</div>`
})
