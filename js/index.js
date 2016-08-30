function callJSON() {
    for (var i in channels) {
        $.ajax({
            url: 'https://api.twitch.tv/kraken/channels/' + channels[i],
            dataType: 'jsonp',
            type: 'GET',
            success: function(data) {
                makeCard(data);
                console.log(data.logo + '\n');
            }
        });
    }
}

function makeCard(data) {
    console.log(data.logo + '\n');
    if (data.logo != undefined) {
        html = '<h2 class="header">Horizontal Card</h2> <div   class="card horizontal">  <div class="card-image"> <img src="' + data.logo;
        html += '">      </div>      <div class="card-stacked">        <div class="card-content">          <p>I am a very simple card. I am good at containing small bits of information.</p>        </div>        <div class="card-action">          <a href="#">This is a link</a>        </div>      </div>    </div>'
        $("#result").html(html);
    }
}


var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
callJSON();
