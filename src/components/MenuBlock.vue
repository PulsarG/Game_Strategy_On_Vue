<template>
    <div class="allmenu">
        <div class="menu">
            <p style="margin-bottom: 3px;"><strong>{{ menuText }}</strong><br>ALFA TEST / ver 0.15</p>
            <div class="menubtns">
                <button class="mbtn" @click="setLearn">Learn</button>
                <button class="mbtn" @click="setLor">LOR</button>
                <button class="mbtn" @click="setLadder">Ladder</button>
            </div>
        </div>

        <div class="menublock">
            <div class="learn" v-show="!isHideLearn">
                <p>
                    Кликните на Золотой рудник, Кузницу или Таверну
                    для взаимодействия.
                </p>
                <p>Урон противника переодически растет.</p>
                <p>Улучшайте свои оружие и броню, покупайте услуги
                    лекаря, изучайте способности.</p>
                <p>Нажмите еще раз, чтобы скрыть обучение</p>
            </div>

            <div class="lor" v-show="!isHideLor">
                <p v-show="!isEng">
                    Далекий космос. Вы - наемник из элитной группы "Evans". В данный момент вы состоите в отряде,
                    который охраняет шахтерское предприятие на планете Тангейзер-1701.
                    <br>
                    <br>
                    Планета богата минералами. Это привлекает многих пиратов. Но главный ваш враг - Барги.
                    <br>
                    <br>
                    Барги - это одни из самых опасных противников в галактике. Но не для вашей элитной группы.
                    Барги объеденены коллективным разумом и уникальными технологиями, что позволяет им противостоять
                    любой угрозе. Если умирает один Барг, то остальные участся противостоять тому, что убило их боевую
                    единицу, и последующие уже имеют повышенную сопротивляемость.
                    <br>
                    <br>
                    Убивая одного Барга вы учите следующего противостоять тому урону, что был нанесет предыдущему.
                    Поэтому для убийства каждого последующего Барга требуется больше усилий.
                    А Барги, мало того, что становятся более стойкими, но и наращивают свой урон, если противник
                    способен противостоять ему. Поэтому Барги все сильнее и сильнее.
                    <br>
                    <br>
                    Противостоять Баргам в затяжной битве - верный проигрыш.
                    <br>
                    <br>
                    Но наемников из отряда "Evans" это только раззадоривает. Постоянно совершенствующийся противник -
                    отличная причина устроить состязание.
                    Во время своей смены многие наемники группы "Evans" выходят в открытую к врагу и ведут счет
                    скошенных голов противника.
                    <br>
                    <br>
                    Конечно, такой запал наемников не редко выходит за рамки стоймости стандартной смены. Поэтому
                    руководство группы объявило: сам ищешь себе пробем - сам оплачиваешь свое веселье.
                    <br>
                    <br>
                    Поэтому наемники, что вышли в соревновательный бой, за свой счет оплачивают повышенный расход
                    ресурсов. В свою очереть отряд снабжения незамедлительно доставляет все с Корабля-Базы.
                    <br>
                    <br>
                    Если наемник терпит поражение, то его товарищи незамедлительно взрывают псионическую бомбу, которая
                    на время прерывает связь Баргов и не позволяет совершенствоваться дальше.
                    Псионические бомбы - не панацея от Баргов, но в локальным стычках позволяют выиграть сражение.
                    <br>
                    <br>
                    Личная криптовалютная система позволяет зарабатывать Кредиты и наращивать заработок за счет
                    установки новых
                    модулей.
                    <br>
                    <br>
                    Вы - новичок в элитной группе "Evans", который только что заступил на пост и решил включится в
                    соревнование со своими товарищами.
                    <br>
                    <br>
                    Зарабатывайте Кредиты, тратьте их на
                    <br>
                    зарядку и улучшение энерго-щита,
                    улучшение защитного поля костюма,
                    <br>
                    <br>
                    улучшения системы наводки (что позволяет
                    точнее целиться и наносит критический урон),
                    <br>
                    <br>
                    модули накопления (которые позволяют быстрее
                    <br>
                    <br>
                    накапливать заряд для выстрела, что повышает скорострельность оружия),
                    <br>
                    <br>
                    покупку особых вещей.
                    <br>
                    <br>
                    Иногда с убитого Барга можно поживиться кредитами, модулями улучшения и особыми предметами.
                    <br>
                    <br>
                    Удачи!
                </p>
                <p v-show="isEng">
                    LOR has not yet been translated into English.
                </p>
            </div>

            <div class="ladder" v-show="!isLadder">
                <table>
                    <th>Nick</th>
                    <th>Hero lvl</th>
                    <th>Kills</th>
                    <tr>
                        <td>Admin</td>
                        <td>over9000</td>
                        <td>over9000</td>
                    </tr>
                </table>
            </div>

            <div class="about" v-show="!isAbout">
                <form @submit.prevent>
                    <textarea class="reporttext" :v-model="msg" name="" id="" cols="30" rows="10">Report</textarea>
                    <input class="reportemail" type="email">
                    <!-- <input :value="report" @input="report = $event.target.value" type="text" name="" id=""> -->
                    <button id="repbtn" type="submit" @click="sendMsg">Send</button>
                </form>
            </div>
        </div>

        <div class="botbtn">

            <div class="btn">
                <button class="btnstart" v-bind:class="{ deletestart: isStart }" @click="toStartGame">{{ startBtn
                }}</button>
                <div class="btnstop" id="btnstop">
                    <button class="rpbtns" @click="setPause">{{ pauseText }}</button>
                    <form action=""><button class="rpbtns">{{ stopBtnText }}</button></form>
                </div>
            </div>


            <div class="langbtn">
                <button class="btnl" @click="setLang">{{ lang }}</button>
                <!-- <button class="btnl" @click="$router.push('/q')">{{ aboutText }}</button> -->
                <button class="btnl" @click="openAbout">{{ aboutText }}</button>
            </div>
        </div>

    </div>
</template>

<script>

export default {

    name: 'menu-block',
    props: {
        isEng: {
            type: Boolean
        }
    },
    data() {
        return {
            msg: "",
            reports: [],
            startBtn: "Start game",
            lang: "RUS",
            menuText: "Evans. Autho-shoot game",
            aboutText: "About",

            ruStart: "Начать игру",
            enStart: "Start game",

            enLang: "ENG",
            ruLang: "RUS",

            isStart: false,

            isHideLearn: true,
            isLadder: true,
            isHideLor: true,
            isAbout: true,
            hideText: "Hide/Show learn",

            stopBtnText: "Resset",
            pauseText: "Pause",

            report: '',
        }
    },

    methods: {
        sendMsg() {
            const msg = document.querySelector('.reporttext');
            const emailfrom = document.querySelector('.reportemail');
            this.$loadScript("https://smtpjs.com/v3/smtp.js")
                .then(() => {
                    window.Email && window.Email.send({
                        SecureToken: "7d841a7f-c9ef-4020-8daa-920e7c4a446d",
                        To: 'furylonzero@gmail.com',
                        From: emailfrom.value,
                        Subject: "This is the subject",
                        Body: msg.value
                    }).then(
                        message => alert(message)
                    );
                })
                .catch(() => {
                    // Failed to fetch script
                });
        },


        toStartGame() {
            this.$emit('toStartGame');
            this.isStart = true;

            setTimeout(() => { document.getElementById('btnstop').style.display = 'block'; }, 2000);
        },
        setLang() {
            this.$emit('setLang');

            if (!this.isEng) {
                this.startBtn = this.enStart;
                this.menuText = "Evans. Autho-shoot game";
                this.lang = this.ruLang;
                this.hideText = "Hide/Show learn";
                this.stopBtnText = "Resset";
                this.pauseText = "Pause";
                this.aboutText = "About";
            } else {
                this.startBtn = this.ruStart;
                this.menuText = "Evans. Autho-shoot game";
                this.lang = this.enLang;
                this.hideText = "Скрыть/показать подсказки";
                this.stopBtnText = "Заново";
                this.pauseText = "Пауза";
                this.aboutText = "Инфо";
            }
        },
        setLearn() {
            if (!this.isHideLearn) {
                this.isHideLearn = true;
            } else {
                this.isHideLearn = false;
                this.isHideLor = true;
                this.isLadder = true;
                this.isAbout = true;
            }
        },
        setLor() {
            if (!this.isHideLor) {
                this.isHideLor = true;
            } else {
                this.isHideLor = false;
                this.isHideLearn = true;
                this.isLadder = true;
                this.isAbout = true;
            }
        },
        setLadder() {
            if (!this.isLadder) {
                this.isLadder = true;
            } else {
                this.isLadder = false;
                this.isHideLearn = true;
                this.isHideLor = true;
                this.isAbout = true;
            }
        },
        openAbout() {
            if (!this.isAbout) {
                this.isAbout = true;
            } else {
                this.isAbout = false;
                this.isLadder = true;
                this.isHideLearn = true;
                this.isHideLor = true;
            }
        },


        setPause() {
            this.$emit('setPause');
        },

        sendReport() {
            const newReport = {
                id: Date.now(),
                report: this.report,
            };
            // this.reports.push(newReport);
            console.log(newReport);
            this.report = '';
        }
    },

}
</script>

<style scoped>
.allmenu {
    width: 400px;
    height: 900px;
    /* border: 5px solid blue; */
    display: flex;
    flex-direction: column;
    align-items: center;
    /* position: relative;
    top: 0; */
}

.menu {
    width: 300px;
    height: 100px;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    align-items: center;
}

.menubtns {
    display: flex;
    flex-direction: row;

}

.mbtn {
    height: 20px;
    width: 80px;
    margin: 2px;
}

.learn {
    height: auto;
}

.menublock {
    height: 890px;
}

.lor {
    height: 600px;
    width: auto;
    /* border: 1px solid red; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 20px;
    opacity: 1;
}

.ladder {
    display: flex;
    justify-self: center;
    align-self: center;
    height: auto;
}

.btnstart {
    height: 100px;
    width: 200px;
    /* border: 1px solid red; */
    display: block;
}

.rpbtns {
    height: 50px;
    width: 200px;
    /* border: 1px solid red; */
    display: block;
}

.btn {
    height: auto;
    width: auto;
    display: flex;
    /* border: 1px solid red; */
}

.btnstop {
    height: 100px;
    width: auto;
    /* border: 1px solid red; */
    display: none;
    position: relative;
    bottom: 0;
    margin-bottom: 10px;
}

.langbtn {
    width: auto;
    height: auto;
    display: flex;
    flex-direction: row;
    /* border: 1px solid red; */
    bottom: 0;
}

.btnl {
    width: 50px;
    height: 30px;
}

p {
    font-size: 20px;
    overflow: auto;
}

.deletestart {
    display: none;
}

.botbtn {
    display: flex;
    justify-self: flex-end;
    flex-direction: column;
    align-items: center;
}
</style>