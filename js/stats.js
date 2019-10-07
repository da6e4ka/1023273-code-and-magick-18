window.renderStatistics = function(ctx, names, times) {
  renderCloud(ctx, 100, 10);
  renderColumns(ctx, names, times);
};

var renderCloud = function(ctx, x, y) {
  var cloudWidth = 400;
  var cloudHeight = 250;
  var shadowOffset = 10;
  var cloudColor = 'rgba(255, 255, 255)';
  var shadowColor = 'rgba(0, 0, 0, 0.7)';
  var textStyle = '16px PT Mono';
  var textColor = 'rgba(0, 0, 0)';
  var cloudTextFirst = 'Ура вы победили!';
  var cloudTextSecond = 'Список результатов:';
  var padding = 25;

  ctx.fillStyle = shadowColor;
  ctx.fillRect(x + shadowOffset, y + shadowOffset, cloudWidth, cloudHeight);
  ctx.fillStyle = cloudColor;
  ctx.fillRect(x, y, cloudWidth, cloudHeight);
  ctx.fillStyle = textColor;
  ctx.font = textStyle;
  ctx.fillText(cloudTextFirst, x + padding, y + padding);
  ctx.fillText(cloudTextSecond, x + padding, y + padding * 2);
};

var getRandomInt = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
};

var getMaxOfArray = function(numArray) {
  return Math.max.apply(null, numArray);
};

var getColumnColor = function(name) {
  return name === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(195, '+getRandomInt(10, 100)+'%, 50%)';
};

var getColumnHeight = function(maxHeight, coef) {
  return maxHeight * coef
};

var renderColumn = function(ctx, name, time, coef, index) {
  var startX = 145;
  var startY = 90;
  var maxHeight = 150;
  var columnOffset = 50;
  var width = 40;
  var height = getColumnHeight(maxHeight, coef);

  var x = startX + (width + columnOffset) * index;
  var y = startY + maxHeight - height;

  ctx.fillStyle = getColumnColor(name);
  ctx.fillRect(x, y, width, height);

  ctx.fillStyle = '#000000';
  ctx.fillText(Math.floor(time), x, y - 5);
  ctx.fillText(name, x, y + height + 15);
};

var renderColumns = function(ctx, names, times) {
  console.log(names, times);

  for (let i = 0; i < names.length; i++) {
    var name = names[i];
    var time = times[i];

    var maxTime = getMaxOfArray(times);

    renderColumn(ctx, name, time, time / maxTime, i)
  }
};
