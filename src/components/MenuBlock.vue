<template>
    <div class="allmenu">
        <div class="menu">
            <p style="margin-bottom: 3px;"><strong>{{ menuText }}</strong><br>ver 0.21 Alpha test</p>
            <div class="menubtns">
                <button class="mbtn" @click="setLearn">{{ learnText }}</button>
                <button class="mbtn" @click="setLor">{{ lorText }}</button>
                <button class="mbtn" @click="goLadderFuncs">{{ ladderText }}</button>
            </div>
        </div>

        <div class="menublock" style="overflow: auto;">
            <div class="learn" v-show="!isHideLearn" style="width: auto">

                <div class="acc" style="display: flex; flex-direction: column; width: auto; margin-top: 20px;">

                    <div class="acc-item" style="display: flex; flex-direction: column;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">Майнинг /
                                    Заработок</strong></button></div>
                        <div class="acc-item__content" style="width: auto;">Lorem ipsum dolor sit amet consectetur,
                            adipisicing elit. Dolor voluptatum quibusdam inventore rerum quod cum tempora autem velit at
                            quidem commodi nulla necessitatibus dignissimos repellat minus aut, nihil animi quae.</div>
                    </div>

                    <div class="acc-item" style="margin-top: 20px;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">Окно персонажа / Меню навыков</strong></button></div>
                        <div class="acc-item__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                            repellat atque aut natus nobis, tempore quam qui quas voluptate deleniti expedita
                            voluptatibus laudantium eveniet harum impedit magni suscipit cum. Nostrum aperiam at omnis
                            deserunt numquam optio. Tempore, sequi facilis? Neque ipsa quo eligendi consequatur qui
                            exercitationem culpa debitis eos necessitatibus?</div>
                    </div>

                    <div class="acc-item" style="margin-top: 20px;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">Инженер / Навыки инженера</strong></button></div>
                        <div class="acc-item__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                            repellat atque aut natus nobis, tempore quam qui quas voluptate deleniti expedita
                            voluptatibus laudantium eveniet harum impedit magni suscipit cum. Nostrum aperiam at omnis
                            deserunt numquam optio. Tempore, sequi facilis? Neque ipsa quo eligendi consequatur qui
                            exercitationem culpa debitis eos necessitatibus?</div>
                    </div>

                    <div class="acc-item" style="margin-top: 20px;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">База Снабжения / Окно доставки</strong></button></div>
                        <div class="acc-item__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                            repellat atque aut natus nobis, tempore quam qui quas voluptate deleniti expedita
                            voluptatibus laudantium eveniet harum impedit magni suscipit cum. Nostrum aperiam at omnis
                            deserunt numquam optio. Tempore, sequi facilis? Neque ipsa quo eligendi consequatur qui
                            exercitationem culpa debitis eos necessitatibus?</div>
                    </div>

                    <div class="acc-item" style="margin-top: 20px;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">Ход боя</strong></button></div>
                        <div class="acc-item__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                            repellat atque aut natus nobis, tempore quam qui quas voluptate deleniti expedita
                            voluptatibus laudantium eveniet harum impedit magni suscipit cum. Nostrum aperiam at omnis
                            deserunt numquam optio. Tempore, sequi facilis? Neque ipsa quo eligendi consequatur qui
                            exercitationem culpa debitis eos necessitatibus?</div>
                    </div>

                    <div class="acc-item" style="margin-top: 20px;">
                        <div class="acc-item__trigger"><button><strong style="font-size: 20px;">Добыча</strong></button></div>
                        <div class="acc-item__content">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione
                            repellat atque aut natus nobis, tempore quam qui quas voluptate deleniti expedita
                            voluptatibus laudantium eveniet harum impedit magni suscipit cum. Nostrum aperiam at omnis
                            deserunt numquam optio. Tempore, sequi facilis? Neque ipsa quo eligendi consequatur qui
                            exercitationem culpa debitis eos necessitatibus?</div>
                    </div>

                </div>

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

            <div class="ladder" id="laddertab" v-show="!isLadder">
                <table v-if="!isLoad">
                    <th style="width: 100px">
                        NICK
                    </th>
                    <th @click="sortByScore">
                        <button style="width: 60px">Score</button>
                    </th>
                    <th @click="sortByLevel">
                        <button style="width: 60px">Level</button>
                    </th>
                    <th @click="sortByKills">
                        <button style="width: 60px">Kills</button>
                    </th>
                    <tr v-for="user in users" :key="user.id">
                        <td>{{ user.nick }}</td>
                        <td>{{ user.score }}</td>
                        <td>{{ user.level }}</td>
                        <td>{{ user.kills }}</td>
                    </tr>
                </table>
                <div v-else>
                    <p>Load...</p>
                </div>
            </div>

            <div class="about" style="display: flex; flex-direction:column;" v-show="!isAbout">
                <form class="report" @submit.prevent>
                    <h4>Обратная звязь</h4>

                    <textarea style="max-width: 300px; min-width: 100px; max-height: 500px; min-height: 100px;"
                        class="reporttext" cols="30" rows="10" v-model="this.inreportText"></textarea>
                    <!-- <input style="width: 220px" class="reportemail" type="email"
                        placeholder="Email (necessarily / обязательно)"> -->
                    <button id="repbtn" type="submit" @click="sendMsg">Send</button>

                </form>

                <h4 style="margin-top: 50px;"><a href="https://github.com/PulsarG">github.com/PulsarG</a> / 2022</h4>
            </div>
        </div>

        <div class="botbtn">

            <div class="btn" style="margin-bottom: 3px;">
                <button class="btnstart" v-bind:class="{ deletestart: isStart }" @click="toStartGame">{{ startBtn
                }}</button>
                <div class="btnstop" id="btnstop">
                    <button class="rpbtns" @click="useAutogame"
                        v-bind:class="{ btnautog: isAutogame }">Autogame</button>
                    <button class="rpbtns" @click="setPause" v-bind:class="{ btnautog: isPause }">{{ pauseText
                    }}</button>
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
import axios from "axios";

export default {

    name: 'menu-block',
    props: {
        isEng: {
            type: Boolean
        },
        isPause: Boolean,
    },
    data() {
        return {

            myItems: [
                {
                    title: 'How many time zones are there in all?',
                    value: 'Given a 24-hour day and 360 degrees of longitude around the Earth',
                    category: 'Tab-1'
                },
                {
                    title: 'How long is a day and year on Venus?',
                    value: 'Venus takes 224.7 Earth days to complete one orbit around the Sun.',
                    category: 'Tab-2'
                },
                {
                    title: 'What animal smells like popcorn?',
                    value: 'Binturongs smell like popcorn.',
                    category: 'Tab-2'
                }
            ],

            msg: "",
            iD: 1,

            startBtn: "Start game",
            lang: "RUS",
            menuText: "Evans. Autho-shoot game",
            aboutText: "About",
            inreportText: "Bug report or other message. Anonim or add you'r Email.",
            urEmailText: "You'r Email (necessarily)",

            ruStart: "Начать игру",
            enStart: "Start game",

            learnText: "Learn",
            lorText: "LOR",
            ladderText: "Ladder",

            enLang: "ENG",
            ruLang: "RUS",

            isStart: false,

            isHideLearn: true,
            isLadder: true,
            isHideLor: true,
            isAbout: true,
            hideText: "Hide/Show learn",
            isAutogame: false,

            stopBtnText: "Resset",
            pauseText: "Pause",

            report: '',

            users: [],
            countOpenLadder: 0,
            isLoad: false,
        }
    },

    methods: {
        goLadderFuncs() {
            this.getFromApi();
            this.setLadder();
        },

        async getFromApi() {
            if (this.countOpenLadder == 0) {
                this.isLoad = true;
                axios.get("https://testgame-59bd1-default-rtdb.europe-west1.firebasedatabase.app/ladder.json")
                    .then((response) => {
                        let array = [];
                        for (var i in response.data)
                            array.push([i, response.data[i]]);
                        let j = array.length;

                        for (let i = 0; i < j; i++) {
                            this.users.push(array[i][1]);
                        }
                    });
                this.countOpenLadder++;
            }
            /* setTimeout(() => { this.sortByScore(); }, 500); */
            setTimeout(() => { this.sortByScore(); this.isLoad = false; }, 500);
        },

        sortByScore() {
            this.users.sort((a, b) => b.score - a.score);
        },
        sortByLevel() {
            this.users.sort((a, b) => b.level - a.level);
        },
        sortByKills() {
            this.users.sort((a, b) => b.kills - a.kills);
        },

        sendMsg() {
            const msg = document.querySelector('.reporttext');
            const emailfrom = document.querySelector('.reportemail');
            this.$loadScript("https://smtpjs.com/v3/smtp.js")
                .then(() => {
                    window.Email && window.Email.send({
                        SecureToken: "7d841a7f-c9ef-4020-8daa-920e7c4a446d",
                        To: 'furylonzero@gmail.com',   // На какую почту отправить
                        From: 'furylonzero@gmail.com',              // должно совпадать с аккаунтом сервиса
                        Subject: "Обратная связь от EvansGame.ru",
                        Body: msg.value
                    }).then(
                        alert("Сообщение отправлено / Message sent")
                    );
                })
                .catch(() => {
                    // Failed to fetch script
                });
        },

        useAutogame() {
            this.$emit('useAutogame');
            if (this.isAutogame) {
                this.isAutogame = false;
            } else {
                this.isAutogame = true;
            }
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
                this.learnText = "Learn";
                this.lorText = "LOR";
                this.ladderText = "Ladder";
                this.inreportText = "Bug report or other message. Anonim or add you'r Email.";
            } else {
                this.startBtn = this.ruStart;
                this.menuText = "Evans. Autho-shoot game";
                this.lang = this.enLang;
                this.hideText = "Скрыть/показать подсказки";
                this.stopBtnText = "Заново";
                this.pauseText = "Пауза";
                this.aboutText = "Инфо";
                this.learnText = "Обучение";
                this.lorText = "ЛОР";
                this.ladderText = "Ладдер";
                this.inreportText = "Ваше сообщение или баг-репорт. Анонимно или добавте ваш Email";
            }
        },
        setLearn() {
            document.querySelectorAll('.acc-item__trigger').forEach((item) =>

                item.addEventListener('click', () => {
                    const parent = item.parentNode;

                    parent.classList.toggle('acc-item--active');
                }));

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
    width: auto;
   
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
    height: auto;
    width: auto;
    /* border: 1px solid red; */
    display: none;
    /*  position: relative;
    bottom: 0; */
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
    height: auto;
}

.about {
    display: flex;
    align-items: center;
    justify-content: center;
}

.report {
    /*  border: 1px solid red; */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

table tr:nth-child(2) {
    counter-reset: rowNumber;
}

table tr {
    counter-increment: rowNumber;
}

table tr td:first-child::before {
    content: counter(rowNumber);
    min-width: 1em;
    margin-right: 0.5em;
}

.btnautog {
    background-color: darkturquoise;
}

.acc-item {
    margin-bottom: 20px;
}

.acc-item--active .acc-item__trigger {
    /*  background-color: rgb(166, 233, 202); */
}

.acc-item--active .acc-item__content {
    display: block;
    background-color: rgb(233, 231, 255);
}

.acc-item__trigger {
    /* padding: 5px; */

    /* border-bottom: 1px solid black; */
    /* position: absolute;
    left: 0%; */
}

.acc-item__content {
    /* border: 1px solid black; */
    border-top: none;
    display: none;
    width: auto;
    margin-top: 20px;
}
</style>