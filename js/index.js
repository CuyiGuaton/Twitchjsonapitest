function channelInfo(channelName) {
    var IsOnline = false,
        game = '',
        status = '',
        channelLink = '',
        channelLogo = '',
        channelDisplayName = '';
    var data = $.ajax({
            url: 'https://wind-bow.hyperdev.space/twitch-api/streams/' + channelName,
            dataType: 'jsonp',
            type: 'GET',
            success: function(data) {
                    if (data.stream === null) {
                        IsOnline = false;
                        status = "Offline";
                        game = '';
                    } else if (data.stream === undefined) {
                        IsOnline = false;
                        status = data.message;
                        game = '';
                    } else {
                        IsOnline = true;
                        status = data.stream.channel.status;
                        game = data.stream.game;
                    };
                    $.ajax({
                        url: 'https://wind-bow.hyperdev.space/twitch-api/channels/' + channelName,
                        dataType: 'jsonp',
                        type: 'GET',
                        success: function(data) {
                            channelLogo = data.logo != null ? data.logo : 'http://www.socialgiri.com/wp-content/uploads/2013/08/about-thumbnail-placeholder.png';
                            channelDisplayName = data.display_name != null ? data.display_name : channelName;
                            channelLink = data.url != null ? data.url : "https://www.twitch.tv/" + channelName;
                            //  console.log(data.logo + '\n');
                            console.log( game + status + channelLogo + channelDisplayName + ' ' + channelLink);
                            html = '<h2 class="header">Horizontal Card</h2> <div   class="card horizontal">  <div class="card-image"> <img src="' + channelLogo;
                            html += '">      </div>      <div class="card-stacked">        <div class="card-content">          <p>I am a very simple card. I am good at containing small bits of information.</p>        </div>        <div class="card-action">          <a href="#">This is a link</a>        </div>      </div>    </div>'
                            $("#result").html(html);
                        }
                    });
                }

        });
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
    for (var i in channels) {
        channelInfo(channels[i]);
    }
