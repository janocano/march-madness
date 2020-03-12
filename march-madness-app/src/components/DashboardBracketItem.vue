<script>
import BracketItemAbstract from "./abstracts/BracketItemAbstract.vue";
export default {
    extends: BracketItemAbstract,
    props: {
        team: {
            type: Object,
            required: false,
            validator(team) {
                return Object.prototype.hasOwnProperty.call(team, "id") && Object.prototype.hasOwnProperty.call(team, "name");
            },
            default() {
                return {
                    name: ""
                };
            }
        },
        isCorrect: {
            type: Boolean,
            required: false,
            default: false
        },
        isIncorrect: {
            type: Boolean,
            required: false,
            default: false
        }
    },
}
</script>