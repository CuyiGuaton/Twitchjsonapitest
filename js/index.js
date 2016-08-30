
$.ajax({
     url:'https://api.twitch.tv/kraken/streams/ESL_SC2',
     dataType:'jsonp',
     success:function(data) {
       console.log(data.stream.channel.status);
       $("#result").html(data.stream.channel.status);
      }
 });

var channels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
