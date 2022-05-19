<template>
    <div class="area">

        <div class="rows" id="rows">

            <div class="row">
                <button @click="btn11" class="btn" v-bind:class="{ btnb: Butt.isBtn11 }">1-1</button>
                <button @click="btn12" class="btn" v-bind:class="{ btnb: Butt.isBtn12 }">1-2</button>
                <button @click="btn13" class="btn" v-bind:class="{ btnb: Butt.isBtn13 }">1-3</button>
                <button @click="btn14" class="btn" v-bind:class="{ btnb: Butt.isBtn14 }">1-4</button>
            </div>
            <div class="row">
                <button @click="btn21" class="btn" v-bind:class="{ btnb: Butt.isBtn21 }">2-1</button>
                <button @click="btn22" class="btn" v-bind:class="{ btnb: Butt.isBtn22 }">2-2</button>
                <button @click="btn23" class="btn" v-bind:class="{ btnb: Butt.isBtn23 }">2-3</button>
                <button @click="btn24" class="btn" v-bind:class="{ btnb: Butt.isBtn24 }">2-4</button>
            </div>
            <div class="row">
                <button @click="btn31" class="btn" v-bind:class="{ btnb: Butt.isBtn31 }">3-1</button>
                <button @click="btn32" class="btn" v-bind:class="{ btnb: Butt.isBtn32 }">3-2</button>
                <button @click="btn33" class="btn" v-bind:class="{ btnb: Butt.isBtn33 }">3-3</button>
                <button @click="btn34" class="btn" v-bind:class="{ btnb: Butt.isBtn34 }">3-4</button>
            </div>
            <div class="row">
                <button @click="btn41" class="btn" v-bind:class="{ btnb: Butt.isBtn41 }">4-1</button>
                <button @click="btn42" class="btn" v-bind:class="{ btnb: Butt.isBtn42 }">4-2</button>
                <button @click="btn43" class="btn" v-bind:class="{ btnb: Butt.isBtn43 }">4-3</button>
                <button @click="btn44" class="btn" v-bind:class="{ btnb: Butt.isBtn44 }">4-4</button>
            </div>

        </div>
        <button @click="Start">ВВОД</button>
        <button @click="ressetCode">RESSET</button>
        <form action="">

            <button @click="result">RESULT</button>
        </form>

        <audio src="http://drive.google.com/uc?export=view&id=1VNdtG1g3KFOUrwdGV7DaTfpCQanYXvCS" controls>SIRIUS</audio>
    </div>
</template>

<script>
export default {
    data() {
        return {
            Butt: {
                isBtn11: false,
                isBtn12: false,
                isBtn13: false,
                isBtn14: false,
                isBtn21: false,
                isBtn22: false,
                isBtn23: false,
                isBtn24: false,
                isBtn31: false,
                isBtn32: false,
                isBtn33: false,
                isBtn34: false,
                isBtn41: false,
                isBtn42: false,
                isBtn43: false,
                isBtn44: false,
            },
            ButtDef: {
                isBtn11: false,
                isBtn12: false,
                isBtn13: false,
                isBtn14: false,
                isBtn21: false,
                isBtn22: false,
                isBtn23: false,
                isBtn24: false,
                isBtn31: false,
                isBtn32: false,
                isBtn33: false,
                isBtn34: false,
                isBtn41: false,
                isBtn42: false,
                isBtn43: false,
                isBtn44: false,
            },

            Cols: {
                isCol1: false,
                isCol2: false,
                isCol3: false,
                isCol4: false,
            },

            Rows: {
                isRow1: false,
                isRow2: false,
                isRow3: false,
                isRow4: false,
            },
            ColsDef: {
                isCol1: false,
                isCol2: false,
                isCol3: false,
                isCol4: false,
            },

            RowsDef: {
                isRow1: false,
                isRow2: false,
                isRow3: false,
                isRow4: false,
            },

            btn11code: "",
            btn12code: "",
            btn13code: "",
            btn14code: "",

            btn21code: "",
            btn22code: "",
            btn23code: "",
            btn24code: "",

            btn31code: "",
            btn32code: "",
            btn33code: "",
            btn34code: "",

            btn41code: "", //
            btn42code: "", //
            btn43code: "", // 
            btn44code: "", //

            allCode1: "",
            allCode2: "",

        }
    },
    methods:
    {
        btn11() {
            this.Butt.isBtn11 = true;
            this.Cols.isCol1 = true;
            this.Rows.isRow1 = true;
        },

        btn12() {
            this.Butt.isBtn12 = true;
            this.Cols.isCol2 = true;
            this.Rows.isRow1 = true;
        },

        btn13() {
            this.Butt.isBtn13 = true;
            this.Cols.isCol3 = true;
            this.Rows.isRow1 = true;
        },

        btn14() {
            this.Butt.isBtn14 = true;
            this.Cols.isCol4 = true;
            this.Rows.isRow1 = true;
        },

        btn21() {
            this.Butt.isBtn21 = true;
            this.Cols.isCol1 = true;
            this.Rows.isRow2 = true;
        },

        btn22() {
            this.Butt.isBtn22 = true;
            this.Cols.isCol2 = true;
            this.Rows.isRow2 = true;
        },

        btn23() {
            this.Butt.isBtn23 = true;
            this.Cols.isCol3 = true;
            this.Rows.isRow2 = true;
        },

        btn24() {
            this.Butt.isBtn24 = true;
            this.Cols.isCol4 = true;
            this.Rows.isRow2 = true;
        },


        btn31() {
            this.Butt.isBtn31 = true;
            this.Cols.isCol1 = true;
            this.Rows.isRow3 = true;
        },

        btn32() {
            this.Butt.isBtn32 = true;
            this.Cols.isCol2 = true;
            this.Rows.isRow3 = true;
        },

        btn33() {
            this.Butt.isBtn33 = true;
            this.Cols.isCol3 = true;
            this.Rows.isRow3 = true;
        },

        btn34() {
            this.Butt.isBtn34 = true;
            this.Cols.isCol4 = true;
            this.Rows.isRow3 = true;
        },

        setBtn11code() {
            if (this.Butt.isBtn11) {


                if (this.Cols.isCol2) {
                    this.btn11code = this.btn11code + "001";
                } else {
                    this.btn11code = this.btn11code + "000";
                }

                if (this.Rows.isRow2) {
                    this.btn11code = this.btn11code + "1";
                } else {
                    this.btn11code = this.btn11code + "0";
                }
            }
        },

        setBtn12code() {
            if (this.Butt.isBtn12) {

                if (this.Cols.isCol1) {
                    this.btn12code = this.btn12code + "01";
                } else {
                    this.btn12code = this.btn12code + "00";
                }

                if (this.Cols.isCol3) {
                    this.btn12code = this.btn12code + "1";
                } else {
                    this.btn12code = this.btn12code + "0";
                }

                if (this.Rows.isRow2) {
                    this.btn12code = this.btn12code + "1";
                } else {
                    this.btn12code = this.btn12code + "0";
                }
            }
        },

        setBtn13code() {
            if (this.Butt.isBtn13) {


                if (this.Cols.isCol2) {
                    this.btn13code = this.btn13code + "01";
                } else {
                    this.btn13code = this.btn13code + "00";
                }

                if (this.Cols.isCol4) {
                    this.btn13code = this.btn13code + "1";
                } else {
                    this.btn13code = this.btn13code + "0";
                }

                if (this.Rows.isRow2) {
                    this.btn13code = this.btn13code + "1";
                } else {
                    this.btn13code = this.btn13code + "0";
                }
            }
        },

        setBtn14code() {
            if (this.Butt.isBtn14) {


                if (this.Cols.isCol3) {
                    this.btn14code = this.btn14code + "01";
                } else {
                    this.btn14code = this.btn14code + "00";
                }



                if (this.Rows.isRow2) {
                    this.btn14code = this.btn14code + "01";
                } else {
                    this.btn14code = this.btn14code + "00";
                }
            }
        },

        setBtn21code() {
            if (this.Butt.isBtn21) {
                if (this.Rows.isRow1) {
                    this.btn21code = "1";
                } else {
                    this.btn21code = "0";
                };



                if (this.Cols.isCol2) {
                    this.btn21code = this.btn21code + "01";
                } else {
                    this.btn21code = this.btn21code + "00";
                }

                if (this.Rows.isRow3) {
                    this.btn21code = this.btn21code + "1";
                } else {
                    this.btn21code = this.btn21code + "0";
                }
            }
        },


        setBtn22code() {
            if (this.Butt.isBtn22) {
                if (this.Rows.isRow1) {
                    this.btn22code = "1";
                } else {
                    this.btn22code = "0";
                };

                if (this.Cols.isCol1) {
                    this.btn22code = this.btn22code + "1";
                } else {
                    this.btn22code = this.btn22code + "0";
                };

                if (this.Cols.isCol3) {
                    this.btn22code = this.btn22code + "1";
                } else {
                    this.btn22code = this.btn22code + "0";
                }

                if (this.Rows.isRow3) {
                    this.btn22code = this.btn22code + "1";
                } else {
                    this.btn22code = this.btn22code + "0";
                }
            }
        },

        setBtn23code() {
            if (this.Butt.isBtn23) {
                if (this.Rows.isRow1) {
                    this.btn23code = "1";
                } else {
                    this.btn23code = "0";
                };

                if (this.Cols.isCol2) {
                    this.btn23code = this.btn23code + "1";
                } else {
                    this.btn23code = this.btn23code + "0";
                };

                if (this.Cols.isCol4) {
                    this.btn23code = this.btn23code + "1";
                } else {
                    this.btn23code = this.btn23code + "0";
                }

                if (this.Rows.isRow3) {
                    this.btn23code = this.btn23code + "1";
                } else {
                    this.btn23code = this.btn23code + "0";
                }
            }
        },

        setBtn24code() {
            if (this.Butt.isBtn24) {
                if (this.Rows.isRow1) {
                    this.btn24code = "1";
                } else {
                    this.btn24code = "0";
                };

                if (this.Cols.isCol3) {
                    this.btn24code = this.btn24code + "1";
                } else {
                    this.btn24code = this.btn24code + "0";
                };

                if (this.Rows.isRow3) {
                    this.btn24code = this.btn24code + "01";
                } else {
                    this.btn24code = this.btn24code + "00";
                }
            }
        },

        setBtn31code() {
            if (this.Butt.isBtn31) {
                if (this.Rows.isRow2) {
                    this.btn31code = "1";
                } else {
                    this.btn31code = "0";
                };

                if (this.Cols.isCol2) {
                    this.btn31code = this.btn31code + "01";
                } else {
                    this.btn31code = this.btn31code + "00";
                }

                if (this.Rows.isRow4) {
                    this.btn31code = this.btn31code + "1";
                } else {
                    this.btn31code = this.btn31code + "0";
                }


            }
        },


        setBtn32code() {
            if (this.Butt.isBtn32) {
                if (this.Rows.isRow2) {
                    this.btn32code = "1";
                } else {
                    this.btn32code = "0";
                };

                if (this.Cols.isCol1) {
                    this.btn32code = this.btn32code + "1";
                } else {
                    this.btn32code = this.btn32code + "0";
                };

                if (this.Cols.isCol3) {
                    this.btn32code = this.btn32code + "1";
                } else {
                    this.btn32code = this.btn32code + "0";
                }

                if (this.Rows.isRow4) {
                    this.btn32code = this.btn32code + "1";
                } else {
                    this.btn32code = this.btn32code + "0";
                }


            }
        },

        setBtn33code() {
            if (this.Butt.isBtn33) {
                if (this.Rows.isRow2) {
                    this.btn33code = "1";
                } else {
                    this.btn33code = "0";
                };

                if (this.Cols.isCol2) {
                    this.btn33code = this.btn33code + "1";
                } else {
                    this.btn33code = this.btn33code + "0";
                };

                if (this.Cols.isCol4) {
                    this.btn33code = this.btn33code + "1";
                } else {
                    this.btn33code = this.btn33code + "0";
                };

                if (this.Rows.isRow4) {
                    this.btn33code = this.btn33code + "1";
                } else {
                    this.btn33code = this.btn33code + "0";
                }

            }
        },

        setBtn34code() {
            if (this.Butt.isBtn34) {
                if (this.Rows.isRow2) {
                    this.btn34code = "1";
                } else {
                    this.btn34code = "0";
                };

                if (this.Cols.isCol3) {
                    this.btn34code = this.btn34code + "1";
                } else {
                    this.btn34code = this.btn34code + "0";
                };



                if (this.Rows.isRow4) {
                    this.btn34code = this.btn34code + "01";
                } else {
                    this.btn34code = this.btn34code + "00";
                }

            }
        },


        Start() {
            this.setBtn11code();
            this.setBtn12code();
            this.setBtn13code();
            this.setBtn14code();

            this.setBtn21code();
            this.setBtn22code();
            this.setBtn23code();
            this.setBtn24code();

            this.setBtn31code();
            this.setBtn32code();
            this.setBtn33code();
            this.setBtn34code();

            this.allCode1 =
                this.btn11code +
                this.btn12code +
                this.btn13code +
                this.btn14code +

                this.btn21code +
                this.btn22code +
                this.btn23code +
                this.btn24code +

                this.btn31code +
                this.btn32code +
                this.btn33code +
                this.btn34code +

                this.btn41code +
                this.btn42code +
                this.btn43code +
                this.btn44code;

            console.log(this.allCode1);

            /* setTimeout(() => { this.ressetCode() }, 1000); */
        },

        ressetCode() {
            this.allCode2 = this.allCode1;
            this.allCode1 = "";
            this.Butt = this.ButtDef;
            this.Cols = this.ColsDef;
            this.Rows = this.RowsDef;
            this.btn11code = "";
            this.btn12code = "";
            this.btn13code = "";
            this.btn14code = "";

            this.btn21code = "";
            this.btn22code = "";
            this.btn23code = "";
            this.btn24code = "";

            this.btn31code = "";
            this.btn32code = "";
            this.btn33code = "";
            this.btn34code = "";

            this.btn41code = "";
            this.btn42code = "";
            this.btn43code = "";
            this.btn44code = "";
        },

        result() {
            if (this.allCode1 == this.allCode2) {
                alert("!!!");
            }

            /* this.allCode2 = "";
            this.allCode1 = "";
            this.Butt = this.ButtDef;
            this.Cols = this.ColsDef;
            this.Rows = this.RowsDef;
            this.btn11code = "";
            this.btn12code = "";
            this.btn13code = "";
            this.btn14code = "";

            this.btn21code = "";
            this.btn22code = "";
            this.btn23code = "";
            this.btn24code = "";

            this.btn31code = "";
            this.btn32code = "";
            this.btn33code = "";
            this.btn34code = "";

            this.btn41code = "";
            this.btn42code = "";
            this.btn43code = "";
            this.btn44code = ""; */
        }
    },

}
</script>

<style scoped>
.btnb {
    background-color: black;
}

.area {
    display: flex;
    justify-content: center;
    align-items: center;
}

.rows {
    display: flex;
    flex-direction: column;
}

.row {
    display: flex;
    flex-direction: row;
}

button {
    height: 100px;
    width: 100px;
}
</style>