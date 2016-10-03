$(document).ready(function () {

    var seconds = parseInt($("#Race_Duration").val());
    var duration = seconds * 1000;

    var percent1 = .0625;
    var step1 = ((percent1) * duration);
    var diff1 = parseFloat($("#Race_Difference1").val());

    var percent2 = .1250;
    var step2 = ((percent2) * duration);
    var diff2 = parseFloat($("#Race_Difference2").val());

    var percent3 = .1875;
    var step3 = ((percent3) * duration);
    var diff3 = parseFloat($("#Race_Difference3").val());

    var percent4 = .2500;
    var step4 = ((percent4) * duration);
    var diff4 = parseFloat($("#Race_Difference4").val());

    var percent5 = .3125;
    var step5 = ((percent5) * duration);
    var diff5 = parseFloat($("#Race_Difference5").val());

    var percent6 = .3750;
    var step6 = ((percent6) * duration);
    var diff6 = parseFloat($("#Race_Difference6").val());

    var percent7 = .4375;
    var step7 = ((percent7) * duration);
    var diff7 = parseFloat($("#Race_Difference7").val());

    var percent8 = .5000;
    var step8 = ((percent8) * duration);
    var diff8 = parseFloat($("#Race_Difference8").val());

    var percent9 = .5625;
    var step9 = ((percent9) * duration);
    var diff9 = parseFloat($("#Race_Difference9").val());

    var percent10 = .6250;
    var step10 = ((percent10) * duration);
    var diff10 = parseFloat($("#Race_Difference10").val());

    var percent11 = .6875;
    var step11 = ((percent11) * duration);
    var diff11 = parseFloat($("#Race_Difference11").val());

    var percent12 = .7500;
    var step12 = ((percent12) * duration);
    var diff12 = parseFloat($("#Race_Difference12").val());

    var percent13 = .8125;
    var step13 = ((percent13) * duration);
    var diff13 = parseFloat($("#Race_Difference13").val());

    var percent14 = .8750;
    var step14 = ((percent14) * duration);
    var diff14 = parseFloat($("#Race_Difference14").val());

    var percent15 = .9375;
    var step15 = ((percent15) * duration);
    var diff15 = parseFloat($("#Race_Difference15").val());

    var percent16 = 1;
    var step16 = ((percent16) * duration);
    var diff16 = parseFloat($("#Race_Difference16").val());

    var steps = [step1, step2, step3, step4, step5, step6, step7, step8, step9, step10, step11, step12, step13, step14, step15, step16];
    var percents = [percent1, percent2, percent3, percent4, percent5, percent6, percent7, percent8, percent9, percent10, percent11, percent12, percent13, percent14, percent15, percent16];
    var diffs = [diff1, diff2, diff3, diff4, diff5, diff6, diff7, diff8, diff9, diff10, diff11, diff12, diff13, diff14, diff15, diff16];

    var totalWidth = 1000;

    function boxAnimate() {
        var box = $("#box");
        box.animate({ width: percents[0] * 700 + 'px' }, (duration / 16) + ((diffs[0] / 200) * duration), 'linear');
        box.animate({ width: percents[1] * 700 + 'px' }, (duration / 16) + ((diffs[1] / 200) * duration), 'linear');
        box.animate({ width: percents[2] * 700 + 'px' }, (duration / 16) + ((diffs[2] / 200) * duration), 'linear');
        box.animate({ width: percents[3] * 700 + 'px' }, (duration / 16) + ((diffs[3] / 200) * duration), 'linear');
        box.animate({ width: percents[4] * 700 + 'px' }, (duration / 16) + ((diffs[4] / 200) * duration), 'linear');
        box.animate({ width: percents[5] * 700 + 'px' }, (duration / 16) + ((diffs[5] / 200) * duration), 'linear');
        box.animate({ width: percents[6] * 700 + 'px' }, (duration / 16) + ((diffs[6] / 200) * duration), 'linear');
        box.animate({ width: percents[7] * 700 + 'px' }, (duration / 16) + ((diffs[7] / 200) * duration), 'linear');
        box.animate({ width: percents[8] * 700 + 'px' }, (duration / 16) + ((diffs[8] / 200) * duration), 'linear');
        box.animate({ width: percents[9] * 700 + 'px' }, (duration / 16) + ((diffs[9] / 200) * duration), 'linear');
        box.animate({ width: percents[10] * 700 + 'px' }, (duration / 16) + ((diffs[10] / 200) * duration), 'linear');
        box.animate({ width: percents[11] * 700 + 'px' }, (duration / 16) + ((diffs[11] / 200) * duration), 'linear');
        box.animate({ width: percents[12] * 700 + 'px' }, (duration / 16) + ((diffs[12] / 200) * duration), 'linear');
        box.animate({ width: percents[13] * 700 + 'px' }, (duration / 16) + ((diffs[13] / 200) * duration), 'linear');
        box.animate({ width: percents[14] * 700 + 'px' }, (duration / 16) + ((diffs[14] / 200) * duration), 'linear');
        box.animate({ width: percents[15] * 700 + 'px' }, (duration / 16) + ((diffs[15] / 200) * duration), 'linear');
        checkWinners();
    }

    function gboxAnimate() {
        var gbox = $("#gbox");
        gbox.animate({ width: percents[0] * 700 + 'px' }, (duration / 16) - ((diffs[0] / 200) * duration), 'linear');
        gbox.animate({ width: percents[1] * 700 + 'px' }, (duration / 16) - ((diffs[1] / 200) * duration), 'linear');
        gbox.animate({ width: percents[2] * 700 + 'px' }, (duration / 16) - ((diffs[2] / 200) * duration), 'linear');
        gbox.animate({ width: percents[3] * 700 + 'px' }, (duration / 16) - ((diffs[3] / 200) * duration), 'linear');
        gbox.animate({ width: percents[4] * 700 + 'px' }, (duration / 16) - ((diffs[4] / 200) * duration), 'linear');
        gbox.animate({ width: percents[5] * 700 + 'px' }, (duration / 16) - ((diffs[5] / 200) * duration), 'linear');
        gbox.animate({ width: percents[6] * 700 + 'px' }, (duration / 16) - ((diffs[6] / 200) * duration), 'linear');
        gbox.animate({ width: percents[7] * 700 + 'px' }, (duration / 16) - ((diffs[7] / 200) * duration), 'linear');
        gbox.animate({ width: percents[8] * 700 + 'px' }, (duration / 16) - ((diffs[8] / 200) * duration), 'linear');
        gbox.animate({ width: percents[9] * 700 + 'px' }, (duration / 16) - ((diffs[9] / 200) * duration), 'linear');
        gbox.animate({ width: percents[10] * 700 + 'px' }, (duration / 16) - ((diffs[10] / 200) * duration), 'linear');
        gbox.animate({ width: percents[11] * 700 + 'px' }, (duration / 16) - ((diffs[11] / 200) * duration), 'linear');
        gbox.animate({ width: percents[12] * 700 + 'px' }, (duration / 16) - ((diffs[12] / 200) * duration), 'linear');
        gbox.animate({ width: percents[13] * 700 + 'px' }, (duration / 16) - ((diffs[13] / 200) * duration), 'linear');
        gbox.animate({ width: percents[14] * 700 + 'px' }, (duration / 16) - ((diffs[14] / 200) * duration), 'linear');
        gbox.animate({ width: percents[15] * 700 + 'px' }, (duration / 16) - ((diffs[15] / 200) * duration), 'linear');
        checkWinners();
    }

    function checkWinners() {
        var gbox = $("#gbox");
        var box = $("#box");
        var uowinning = $("#uowinning");
        var ouwinning = $("#ouwinning");
        var uoWon = $(".uoWon");
        var ouWon = $(".ouWon");

        var raceWinner = $("#Race_Winner");

        if (gbox.width() > box.width()) {
            uowinning.show();
            ouwinning.hide();
        }
        else if (gbox.width() < box.width()) {
            uowinning.hide();
            ouwinning.show();
        }
        else {
            uowinning.hide();
            ouwinning.hide();
        }

        if (box.width() > 650 && gbox.width() < 650) {
            ouWon.show();
            $(".ouBox").addClass("orange");
        }

        if (gbox.width() > 650 && box.width() < 650) {
            uoWon.show();
            $(".uoBox").addClass("yellow");
        }


    }

    //setTimeout(function () {
    //    var currentPoints = $("#CurrentPoints").val();
    //    $('#CurrentPointsLabel').html("CURRENT POINTS: " + currentPoints);
    //}, 0);

    setTimeout(function () {
        $("#ready").show();
    }, 1000);

    setTimeout(function () {
        $("#ready").hide();
        $("#set").show();
    }, 2000);

    setTimeout(function () {
        $("#set").hide();
        $("#go").show();
        document.getElementById('startaudio').play();
        document.getElementById('crowdaudio').play();
    }, 3000);

    setTimeout(function () {
        $("#go").hide();
    }, 3300);

    setTimeout(function () {
        document.getElementById('cheer1audio').play();
    }, duration + 2000);

    setTimeout(function () {
        document.getElementById('cheer2audio').play();
    }, duration + 1000);

    setTimeout(function () {
        document.getElementById('cheer3audio').play();
    }, duration + 1000);


    setTimeout(function () {
        boxAnimate();
        gboxAnimate();
        setInterval(function () { checkWinners() }, 50);
    }, 3000);

    setTimeout(function () {
        $('#CurrentPointsLabel').hide();
        $('#AfterPointsLabel').show();
    }, duration + 3300)

    setTimeout(function () {
        $('#raceForm').submit();
    }, duration + 10000)

});