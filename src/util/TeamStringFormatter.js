module.exports = {
    format: function(team) {
        return team.name + " - " + team.getNumbers().join(',');
    }
};
