
var seconds = parseInt($("#Race_Duration").val());
var duration = seconds * 1000;

//var step1 = 625;
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

setTimeout(function () {
    var width = percents[1] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[0]);

setTimeout(function () {
    var width = percents[2] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[1]);

setTimeout(function () {
    var width = percents[3] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[2]);

setTimeout(function () {
    var width = percents[4] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[3]);

setTimeout(function () {
    var width = percents[5] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[4]);

setTimeout(function () {
    var width = percents[6] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[5]);

setTimeout(function () {
    var width = percents[7] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[6]);

setTimeout(function () {
    var width = percents[8] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[7]);

setTimeout(function () {
    var width = percents[9] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[8]);

setTimeout(function () {
    var width = percents[10] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[9]);

setTimeout(function () {
    var width = percents[11] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[10]);

setTimeout(function () {
    var width = percents[12] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[11]);

setTimeout(function () {
    var width = percents[13] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#ouprogress').addClass('progress-bar-success');
}, steps[12]);

setTimeout(function () {
    var width = percents[14] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
}, steps[13]);

setTimeout(function () {
    var width = percents[15] * 90;
    $('#ouprogress')
    $('#ouprogress').css('width', width + '%').attr('aria-valuenow', width);
}, steps[14]);




setTimeout(function () {
    var width = percents[1] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[0] + diffs[0] * 1000);

setTimeout(function () {
    var width = percents[2] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[1] + diffs[1] * 1000);

setTimeout(function () {
    var width = percents[3] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[2] + diffs[2] * 1000);

setTimeout(function () {
    var width = percents[4] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[3] + diffs[3] * 1000);

setTimeout(function () {
    var width = percents[5] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[4] + diffs[4] * 1000);

setTimeout(function () {
    var width = percents[6] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[5] + diffs[5] * 1000);

setTimeout(function () {
    var width = percents[7] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[6] + diffs[6] * 1000);

setTimeout(function () {
    var width = percents[8] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[7] + diffs[7] * 1000);

setTimeout(function () {
    var width = percents[9] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[8] + diffs[8] * 1000);

setTimeout(function () {
    var width = percents[10] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[9] + diffs[9] * 1000);

setTimeout(function () {
    var width = percents[11] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[10] + diffs[10] * 1000);

setTimeout(function () {
    var width = percents[12] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
    //$('#uoprogress').addClass('progress-bar-success');
}, steps[11] + diffs[11] * 1000);

setTimeout(function () {
    var width = percents[13] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
}, steps[12] + diffs[12] * 1000);

setTimeout(function () {
    var width = percents[14] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
}, steps[13] + diffs[13] * 1000);

setTimeout(function () {
    var width = percents[15] * 90;
    $('#uoprogress')
    $('#uoprogress').css('width', width + '%').attr('aria-valuenow', width);
}, steps[14] + diffs[14] * 1000);

setTimeout(function () {
    var width = percents[15] * 90;
    $('#winnerMessage').fadeIn(300);
}, steps[14] + 2000);
