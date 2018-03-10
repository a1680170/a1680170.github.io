$(document).ready(function () {

    var stage = new PIXI.Container()
    var renderer = PIXI.autoDetectRenderer(1020, 500)
    document
        .getElementById('pk10-backdrop')
        .appendChild(renderer.view)

    var resultContainer = new PIXI.Container()
    var result = PIXI.autoDetectRenderer(640, 64, {
        transparent: true
    })
    document.getElementById('pk10-result').appendChild(result.view)

    window.setupPixiPK10 = new setupPixi();

    function setupPixi() {
        var me = this
        var finishState = false
        var start = false
        var finish = false
        var stopped = false
        //Fail-safe position value
        var currentPosition = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]


        var cars = [],
            singleCarContainer = [],
            flame = [],
            wind = [],
            number = [],
            frontWheel = [],
            backWheel = []
        var carPosition = []
        var carsContainer = new PIXI.Container()
        var randomArray = getRandomArray(randomArray)
        var blurFilter = new PIXI.filters.BlurFilter()
        blurFilter.blur = 1

        //jQuery DOM Element
        var stopwatch = $('.stopwatch-container');

        // Variable to become params for interface
        var countdownTime = 10;
        var lastResultPostion = [4,6,7,5,2,3,1,8,10,9];
        var latestPostion = [1, 8, 3, 4, 5, 2, 7, 6, 9, 10];

        initCountdownTimer();

        this.getRunToFinishState = function () {
            return finishState
        }

        this.setRunToFinishState = function () {
            finishState = !finishState
        }

        this.toggleFinishAnimation = function () {
            finish = true
            stopped = true
            me.setCurrentPosition()
            var showResultTimeGap = 7000;
            var resultPage = $(".content .result");
            setTimeout(function(){
                resultPage.find(".cars ul li:nth-child(1)").attr("class", "c-" + latestPostion[1]);
                resultPage.find(".cars ul li:nth-child(2)").attr("class", "c-" + latestPostion[0]);
                resultPage.find(".cars ul li:nth-child(3)").attr("class", "c-" + latestPostion[2]);
                resultPage.show();
            }, showResultTimeGap);
        }

        this.getCurrentStartState = function () {
            return start
        }

        this.setCurrentStartState = function () {
            start = !start
            stopwatch.addClass("hide");
        }

        this.getCurrentFinishState = function () {
            return finish
        }

        this.getStoppedState = function () {
            return stopped
        }

        this.getCurrentPosition = function () {
            return currentPosition
        }

        this.setCurrentPosition = function () {
            currentPosition = latestPostion
        }

        this.getLastPosition = function () {
            return currentPosition
        }

        this.setLastPosition = function () {

        }

        function initCountdownTimer(){

            currentPosition = lastResultPostion;

            var warningTime = countdownTime / 4;
            var goTime = countdownTime * 0.1;

            stopwatch.find('.wrapper[data-anim="base wrapper"]').css("animation-delay" , (countdownTime / 2 ) + "s")
            stopwatch.find('.circle[data-anim="base left"]').css("animation-duration" , countdownTime + "s")
            stopwatch.find('.circle[data-anim="base right"]').css("animation-duration" , (countdownTime / 2) + "s")
            var countdownInterval = setInterval(function(){
                countdownTime -= 1;
                stopwatch.find(".counter span").text(moment.utc(countdownTime * 1000).format('mm:ss'));
                if(countdownTime <= warningTime){
                    stopwatch.find('.circle').addClass("yellow");
                    if(countdownTime <= goTime){
                        stopwatch.find('.circle').addClass("green");

                        if(countdownTime <= 0){
                            stopwatch.find(".counter span").text("开始");
                            clearInterval(countdownInterval);
                            me.setCurrentStartState();
                        }
                    }
                }
            }, 1000);
        }

        var road = new PIXI.extras.TilingSprite(
            PIXI.Texture.fromImage("img/main-road.jpg"),
            2660,
            520
        )

        var audience = new PIXI.extras.TilingSprite(
            PIXI.Texture.fromImage("img/audience.png"),
            1346,
            80
        )

        var starter = new PIXI.extras.TilingSprite(
            PIXI.Texture.fromImage("img/finisher.png"),
            249,
            515
        )

        var finisher = new PIXI.extras.TilingSprite(
            PIXI.Texture.fromImage("img/finisher.png"),
            249,
            515
        )

        var flag1 = new PIXI.extras.TilingSprite(
            PIXI.Texture.fromImage("img/flag.png"),
            100,
            83
        )

        var flag2 = new PIXI.extras.TilingSprite(
            PIXI.Texture.fromImage("img/flag.png"),
            100,
            83
        )

        stage.addChild(road)
        stage.addChild(audience)
        stage.addChild(starter)
        stage.addChild(finisher)
        stage.addChild(flag1)
        stage.addChild(flag2)

        var currentPositionArr = me.getLastPosition()

        var odd = 0,
            even = 0
        for (var i = 0; i <= 9; i++) {
            singleCarContainer[i] = new PIXI.Container()
            cars[i] = new PIXI.extras.TilingSprite(
                PIXI.Texture.fromImage("img/cars-shadow.png"),
                200,
                64
            )

            flame[i] = new PIXI.extras.TilingSprite(
                PIXI.Texture.fromImage("img/flame_blur.png"),
                60,
                11
            )

            wind[i] = new PIXI.extras.TilingSprite(
                PIXI.Texture.fromImage("img/wind_blur.png"),
                114,
                47
            )

            number[i] = new PIXI.extras.TilingSprite(
                PIXI.Texture.fromImage("img/numbersprite.png"),
                64,
                64
            )

            frontWheel[i] = new PIXI.extras.TilingSprite(
                PIXI.Texture.fromImage("img/wheel.gif"),
                22,
                22
            )

            backWheel[i] = new PIXI.extras.TilingSprite(
                PIXI.Texture.fromImage("img/wheel.gif"),
                22,
                22
            )

            singleCarContainer[i].addChild(cars[i])
            singleCarContainer[i].addChild(flame[i])
            singleCarContainer[i].addChild(wind[i])
            singleCarContainer[i].addChild(frontWheel[i])
            singleCarContainer[i].addChild(backWheel[i])

            carsContainer.addChild(singleCarContainer[i])

            resultContainer.addChild(number[i])

            flame[i].position.x += 190
            flame[i].position.y += 30
            flame[i].alpha = 0

            wind[i].position.y += 8
            wind[i].alpha = 0

            frontWheel[i].position.x += 46
            frontWheel[i].position.y += 37
            frontWheel[i].anchor.set(0.5)

            backWheel[i].position.x += 159
            backWheel[i].position.y += 37
            backWheel[i].anchor.set(0.5)

            number[i].tilePosition.y -= 64 * i
            number[i].position.x += 64 * i

            if ((i + 1) % 2 === 0) {
                even++
                cars[i].tilePosition.x += 200
                cars[i].tilePosition.y -= 60 * (odd - 1)
            } else {
                odd++
                cars[i].tilePosition.y -= 60 * (odd - 1)
            }

            singleCarContainer[i].position.y += 42 * (i + 1)
            singleCarContainer[i].position.x += (i + 1) * 10

            //Define number and car position
            carPosition[i] = {
                numberPosition: (number[i].position.x + 64) / 64,
                carPosition: singleCarContainer[i].position.x / 10
            }
        }

        carsContainer.position.y += 10
        carsContainer.position.x += 750

        starter.position.y += 80
        starter.position.x += 650

        finisher.position.y += 80
        finisher.position.x += -200

        flag1.position.x += 100 - 200
        flag1.position.y += 60
        flag1.anchor.set(0.5)
        flag1.rotation = 0.4

        flag2.position.x += 20 - 200
        flag2.position.y += 60
        flag2.anchor.set(0.5)
        flag2.rotation = -0.4
        flag2.scale.x = -1

        audience.tileScale.y = 0.67
        // audience.filters = [blurFilter]

        //Each car's wheel position is different
        frontWheel[0].position.x += 8
        frontWheel[0].position.y += 5
        backWheel[0].position.y += 5

        frontWheel[1].position.y += 5
        backWheel[1].position.x -= 5
        backWheel[1].position.y += 5

        frontWheel[2].position.x += 9
        frontWheel[2].position.y += 5
        backWheel[2].position.y += 5

        frontWheel[3].position.x += 3
        frontWheel[3].position.y += 4
        backWheel[3].position.x -= 7
        backWheel[3].position.y += 4

        frontWheel[4].position.x += 3
        frontWheel[4].position.y += 4
        backWheel[4].position.x -= 3
        backWheel[4].position.y += 4

        frontWheel[5].position.x += 3
        frontWheel[5].position.y += 4
        backWheel[5].position.x -= 5
        backWheel[5].position.y += 4

        frontWheel[6].position.x += 3
        frontWheel[6].position.y += 1
        backWheel[6].position.x -= 1
        backWheel[6].position.y += 1

        frontWheel[7].position.x -= 1
        frontWheel[7].position.y += 1
        backWheel[7].position.x -= 3
        backWheel[7].position.y += 1

        frontWheel[8].position.x += 8

        backWheel[9].position.x -= 3

        stage.addChild(carsContainer)
        // update();

        var counter = 0
        randomArray = getRandomArray()

        var numberShiftTween

        // let running = true
        // let finish = false
        // let stopped = true

        var runOnce = true
        var showFlag = true

        var running = true
        var finish = false
        var stopped = false

        var carMovingInterval = setInterval(function() {
            if(running) {
                if (showFlag) {
                    //Reset the margin left of the cars when start
                    // for(let i=0; i <= 9;i++){
                    //     singleCarContainer[i].position.x = 0
                    // }

                    // Move the start line backwards
                    TweenMax.to(starter, 1, {
                        x: 1000,
                        ease: Power1.easeInOut
                    })

                    //When trigger start set to 800
                    // carsContainer.position.x += 50
                    TweenMax.to(carsContainer, 1, {
                        x: 800,
                        ease: Power1.easeInOut
                    })
                    showFlag = false
                }

                // Show flame and wind if speed is more than 5
                if (randomArray[counter] > 7) {
                    TweenMax.to(singleCarContainer[counter], 3, {
                        x: -60 * randomArray[counter],
                        ease: Power1.easeInOut
                    })
                    TweenMax.fromTo(
                        flame[counter],
                        3, {
                            alpha: 1,
                            ease: Power4.easeOut
                        }, {
                            alpha: 0
                        }
                    )
                    TweenMax.fromTo(
                        wind[counter],
                        3, {
                            alpha: 1,
                            ease: Power4.easeOut
                        }, {
                            alpha: 0
                        }
                    )
                } else {
                    TweenMax.to(singleCarContainer[counter], 4, {
                        x: -60 * randomArray[counter]
                    })
                }

                numberShiftTween = TweenMax.to(number[counter], 4, {
                    x: 64 * (10 - randomArray[counter]),
                    ease: 'quad'
                })

                counter++

                if (counter > 9) {
                    counter = 0
                    randomArray = getRandomArray()
                    // console.log(randomArray)
                    // clearInterval(carMovingInterval)
                }
            }
            carPosition[counter] = {
                numberPosition: counter + 1,
                carPosition: randomArray[counter]
            }
        }, 400
    )

        function update() {
            let resultBall = getResultBalls()

            requestAnimationFrame(update)
            renderer.render(stage)
            result.render(resultContainer)

            var currentPosition = me.getLastPosition()

            if (!running && !finish) {
                for (var i = 0; i <= 9; i++) {
                    TweenMax.to(number[currentPosition[i] - 1], 0.1, {
                        x: 64 * i,
                        ease: 'quad'
                    })
                }
            }
            if (me.getRunToFinishState() || getMaximumTimeout()) {
                // initialState.lastPosition = resultBall
                // initialState.position = resultBall
                me.toggleFinishAnimation()
                if (me.getRunToFinishState()) {
                    // me.setRunToFinishState()
                }
                if (getMaximumTimeout()) {
                    setMaximumTimeout()
                }
            }

            running = me.getCurrentStartState()
            finish = me.getCurrentFinishState()
            stopped = me.getStoppedState()

            if (running) {
                road.tilePosition.x += 60
                audience.tilePosition.x += 30

                for (var i = 0; i <= 9; i++) {
                    frontWheel[i].rotation -= 0.4
                    backWheel[i].rotation -= 0.4
                }
            }

            if (finish) {
                road.tilePosition.x -= 57
                audience.tilePosition.x -= 25

                if (runOnce) {
                    var currentPositionArr = me.getCurrentPosition()

                    for (var i = 0; i <= 9; i++) {
                        TweenMax.to(number[currentPositionArr[i] - 1], 4, {
                            x: 64 * i,
                            ease: 'quad'
                        })
                        TweenMax.to(singleCarContainer[currentPositionArr[i] - 1], 4, {
                            x: -60 * (10 - i),
                            ease: Power1.easeInOut
                        })

                        TweenMax.fromTo(
                            flame[currentPositionArr[0] - 1],
                            7, {
                                alpha: 1,
                                ease: SlowMo.ease.config(0.7, 0.7, false)
                            }, {
                                alpha: 0
                            }
                        )
                        TweenMax.fromTo(
                            wind[currentPositionArr[0]],
                            7, {
                                alpha: 1,
                                ease: SlowMo.ease.config(0.7, 0.7, false)
                            }, {
                                alpha: 0
                            }
                        )
                    }

                    TweenMax.to(finisher, 10, {
                        x: 900,
                        ease: Power1.easeInOut
                    })
                    TweenMax.to(flag1, 10, {
                        x: 990,
                        ease: Power1.easeInOut
                    })
                    TweenMax.to(flag2, 10, {
                        x: 910,
                        ease: Power1.easeInOut
                    })

                    clearInterval(carMovingInterval)

                    runOnce = false
                }
            }
        }

        update();

        function getRandomArray() {
            return shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
        }

        function shuffle(array) {
            let currentIndex = array.length
            let temporaryValue, randomIndex

            while (0 !== currentIndex) {
                randomIndex = Math.floor(Math.random() * currentIndex)
                currentIndex -= 1

                temporaryValue = array[currentIndex]
                array[currentIndex] = array[randomIndex]
                array[randomIndex] = temporaryValue
            }
            return array
        }

        // Result ball
        // function getCurrentPosition() {
        //     return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        // }

        function getResultBalls() {
            return [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
        }

        function getMaximumTimeout() {
            return false
        }

    }

});