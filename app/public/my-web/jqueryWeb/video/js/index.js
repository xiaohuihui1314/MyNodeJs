/**
 * Created by LYH on 2016/7/18.
 */
window.onload = function () {
    var play = document.getElementById("play");
    var video = document.getElementsByTagName("video")[0];
    var video_duration = document.getElementsByClassName("player-duration")[0];
    var video_played = document.getElementsByClassName("player-progress-played")[0];
    var videoSeek = document.getElementById("videoSeek");
    var fullscreen = document.getElementById("fullscreen");

    //    视频长度
    play.onclick = function () {

        var source = $("<source>").attr({"src": "../video/mp4/rabbit.mp4", "type": "video/mp4"});
        source.appendTo(video);
        console.log(video);
        video.webkitPlaysinline;

        if (video.paused) {
            video.play();
        }
        else {
            video.pause();
        }
    };
    video.addEventListener("loadedmetadata", videoLength);
    function videoLength() {
        var time = this.duration;//获取总时长
        console.log(time)
        console.log(this.buffered)
        var video_secs = parseInt(time % 60);
        var video_mins = parseInt((time / 60) % 60);
        var video_hours = parseInt(((time / 60) / 60) % 60);
        video_secs = ("0" + video_secs).slice(-2);
        video_mins = ("0" + video_mins).slice(-2);
        video_hours = video_hours > 0 ? video_hours + ":" : "";
        console.log(video_secs)
        console.log(video_mins)
        console.log(video_hours)
        video_duration.innerText = video_hours + video_mins + ":" + video_secs;
    }

//        控制视频进度
    videoSeek.addEventListener("change", function () {
            video_played.value = this.value;
            console.log(this.value);
        }
    )


    function launchFullscreen(element) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.mozRequestFullScreen) {
            element.mozRequestFullScreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
    }

    fullscreen.onclick = function () {
        launchFullscreen(document.documentElement)

        console.log("000")
    }
}