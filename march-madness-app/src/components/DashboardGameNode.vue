
<script>
export default
{
    components: {
        BracketItem
    },
    props: {
        game: {
            type: Object,
            required: false,
            validator(game) {
                return Object.prototype.hasOwnProperty.call(game, "id") 
                    && Object.prototype.hasOwnProperty.call(game, "first_team")
                    && Object.prototype.hasOwnProperty.call(game, "second_team")
                    && Object.prototype.hasOwnProperty.call(game, "winner_id");
            }
        }
    },
    methods: {
        checkIfWinner(team) {
            return team.id === this.game.winner_id;
        }
    }
    
}
</script>