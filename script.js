    // BÜTÜN İTEM VE KASA TANIMLARI
    const REWARDS_DEF = [
        // Parlak Kasa (parlak)
        { id: "usbs_cyrex", name: "USBS - Cyrex", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSI-WsG3SA_u1vouRxcCW6khUz_TjdzdmsJyiTZg8kX8N4ELUP5EPsw9G1YeLn5VTXjY0WxS6rhiIYuCd1o7FV2N83Spg", rarity: "Yaygın", weight: 16, case: "parlak" },
        { id: "glock_su", name: "Glock 18 - Su Elemanteli", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK72fB3aFxP11te99cCW6khUz_TjVyompc3-QOFR2DJQkFOMJtBbqk9LlY-7n5QLZjtkTxCWqhixPv311o7FVIf8eASQ", rarity: "Yaygın", weight: 16, case: "parlak" },
        { id: "mp7_kansporu", name: "MP7 - Kan Sporu", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8jsHf-jFk4uL5V6ZhL_-XHXef0_pJvOhuRz39lxsk4W3Ry96pIHrFOgElDZN2Q-9etUSwk4LnYu3h5wLejYwWxSr43zQJsHiIGMoJQA", rarity: "Yaygın", weight: 16, case: "parlak" },
        { id: "mp9_latte", name: "MP9 - Latte", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8js_f_jdk4uL3V6hsNOSWMWuZxuZi_rdrGCyxxER252ncw9arJC-QOAcmXsF2ROAP4RbrlNOzNbzq5VDb2YJbjXKpzLFi2t8", rarity: "Yaygın", weight: 16, case: "parlak" },
        { id: "m4a4_ejderha", name: "M4A4 - Ejderha", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSIf6QC3SE0-96j-1gSCGn20x062mAwtb8cX3CaAMoApV3EeFZ50Wwk9fuM-vqtAHW3opHn3iqiSxXrnE8PytIGFg", rarity: "Yaygın", weight: 16, case: "parlak" },
        { id: "awp_printstream", name: "AWP - Printstream", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_DVL0OK8Yap5M-SBC2ad_uJ_t-l9AX_qlk4k5GyAzo6ocC-QZgZxX8AjEbZY5xnrxtPjM7vnsgGIj9oTmXngznQeg3pfcPs", rarity: "Yaygın", weight: 17, case: "parlak" },
        { id: "m9_gamma", name: "M9 Bayonet - Gamma Doppler", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Wts2sab1iLvWHMWad_ul3vexocC28hQ0rti-6iof4Mi6TAVp5Xco0W-UPsBDuwdfgN-jn5FHXjdpNzn322CpP5i064-oBVaEm_PWGjFmXMrAjoc5UYR0MRG0", rarity: "Nadir", weight: 3, isRare: true, case: "parlak" },

        // Hayalet Kasası (hayalet)
        { id: "baretta_turbo", name: "Çift Baretta - Turbo", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL0kp_0-B1Y-s2qfaVhH_WfB3OV0tFkse1lVha_nBovp3OHytv8JCnBbAF1X5MjR7UPsBfrmoHuNr7nsgbfjdlAxSr63CIfuChr_a9cBiuNovOB", rarity: "Yaygın", weight: 19, case: "hayalet" },
        { id: "glock_hayalet", name: "Glock 18 - Hayalet", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1T-825YK15Jc-WCmCV0tF6ueZhW2fiw0Ujt2yGy4ysIHzEaQUlWJJyE-dbsBK5x4XjM7ix7gDeiYkUmy6okGoXubB2-hmv", rarity: "Yaygın", weight: 19, case: "hayalet" },
        { id: "tec9_beyazkorluk", name: "Tec 9 - Beyaz Körlük", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wjFU0OWmYbBoL-WHMXOVwrdJvOhuRz39lB9_smmDn9ugdCrCbFcnCJEmFrVcuhC4w9TgNePhsQWKiN4QzSv7hzQJsHg2FaN_Cg", rarity: "Yaygın", weight: 19, case: "hayalet" },
        { id: "m4a1s_hiper", name: "M4A1-S - Hiper Canavar", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_OGMWrEwL9JuPh5SjuMlxgmoCm6lob-KT-JbwF1WZEjR-YJskK9k9XiYePltAeNjYlAxSn5j34dvCZstb4LB6Ut-7qX0V8Xkv5_2A", rarity: "Yaygın", weight: 19, case: "hayalet" },
        { id: "ak47_imparatorice", name: "AK47 - İmparatoriçe", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiVI0POlPPNSJf2DHGKD0tF6ueZhW2exxEt152rWzI7_Ii-Ubw90DMB0Ee4C5xOwx9GxZbjk71PXgogWn36tkGoXudZeYvlo", rarity: "Yaygın", weight: 18, case: "hayalet" },
        { id: "eldiven_amfibik", name: "Spor Eldivenleri - Amfibik", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Tk5UvzWCL2kpn2-DFk_OKherB0H-CcB3Sfz9Fwou5ucCu_gBgYpDWMjorGLSLANkI-W5R4E7JZtxbskNWxZeLi4QPejdgTmSn62iwbvyw957kDAqog_fXWjBaBb-Pahe96zA", rarity: "Nadir", weight: 3, isRare: true, case: "hayalet" },
        { id: "sargi_dikkat", name: "El Sargıları - DİKKAT!", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu4vx603vRA_Olpfu-TVJ7uK9V6xsLvSEHGaA_uJzsfVhSjuqqh4mpimMlYHGLSLANkI-CcBxQeIMtEHsl4CyNOjm4QDa3dgTniWvjnhJ7Hk54bsEV_Ak-KWE3BaBb-Pt8HWajg", rarity: "Nadir", weight: 3, isRare: true, case: "hayalet" },

        // Kelebek Kasası (kelebek)
        { id: "block18", name: "Glock 18 - Block18", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1c4_2tY5tvMvmQBVidzuByouhoQRa_nBovp3PXzov9cyjDbwckXMMkF7IIthOwwNDmY-rq4AzfjItMyH_9iC0YuC04_a9cBk5_kH3q", rarity: "Efsanevi", weight: 9, case: "kelebek" },
        { id: "asiimov", name: "AK47 - Asiimov", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlPPNSIeOaB2qf19F6ueZhW2e2wEt-t2jcytf6dymSO1JxA5oiRecLsRa5kIfkYr-241aLgotHz3-rkGoXuUp8oX57", rarity: "Çok Nadir", weight: 18, case: "kelebek" },
        { id: "temukau", name: "M4A4 - Temukau", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSNPWeG2yR1NF6ueZhW2ewlBtx5W6AmYv9JS6XaAV1CJEmTeUL4UTpxNzjZO3jtgaIjN9ExCuskGoXuRnyRhBA", rarity: "Destansı", weight: 13, case: "kelebek" },
        { id: "vogue", name: "Glock 18 - Vogue", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-WF2KTzuBiseJ9cCW6khUz_T-GyNavdCqRawN1CMFwTOcO5hO7loXiY-zmsQKPi44QzHj22ikcvy11o7FVfFOBmfY", rarity: "Nadir", weight: 27, case: "kelebek" },
        { id: "printstream", name: "Deagle - Printstream", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL1m5fn8Sdk7OeRbKFsJ8-DHG6e1f1iouRoQha_nBovp3OGmdeqInyVP1V0XsYlRbEI50a5wNyzZr605AyI3t5MmCSohylAuC89_a9cBoMY9UkV", rarity: "Efsanevi", weight: 6, case: "kelebek" },
        { id: "tenha", name: "M4A4 - Tenha", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSJPWAAWuR1etJo_FoTCyMmRQguynLnNepJXPEaQJyDZJ0QOdbsxi7ktS0Y-Li4ADegthGn32ojCJJ7CxosfFCD_SyjfEkHg", rarity: "Mitolojik", weight: 2, case: "kelebek" },
        { id: "atheris", name: "AWP - Atheris", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7JkMPWBMWuZxuZi_rZsS3zgzU8isW3dnIr6eHKfPVAhDpojEe9YsUW4xta1Nuzm5FDci4NbjXKpmWVQppo", rarity: "Nadir", weight: 22, case: "kelebek" },
        { id: "kelebek_gamma", name: "Kelebek Bıçak - Gamma Doppler", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Z-ua6bbZrLOmsD2qvxu97veBWSyajhREioQKVko7qJHj4Ml93UtZuTbULtxfsxNDjZejqtFbajIMUyy36iytOvS1u5-ZXVPAt_PbejgiSZap9v8cjE0cexQ", rarity: "Nadir", weight: 3, isRare: true, case: "kelebek" },

        // Müzik Kiti Kasası (muzik)
        { id: "musicletithappen", name: "Müzik Kiti - Let It Happen", img: "letithappen.png", audio: "musicletithappen.mp3", rarity: "Mitolojik", weight: 3, isMusic: true, case: "muzik" },
        { id: "moogcity", name: "Müzik Kiti - Moog City 2", img: "moogcity.png", audio: "moogcity2.mp3", rarity: "Nadir", weight: 15, isMusic: true, case: "muzik" },
        { id: "nuts", name: "Müzik Kiti - nuts", img: "nuts.png", audio: "nuts.mp3", rarity: "Efsanevi", weight: 6, isMusic: true, case: "muzik" },
        { id: "kuduro", name: "Müzik Kiti - Danza Kuduro", img: "kuduro.png", audio: "kuduro.mp3", rarity: "Çok Nadir", weight: 10, isMusic: true, case: "muzik" },
        { id: "swerved", name: "Müzik Kiti - Swerved", img: "swerved.png", audio: "swerved.mp3", rarity: "Destansı", weight: 8, isMusic: true, case: "muzik" },
        { id: "whine", name: "Müzik Kiti - Whine", img: "whine.png", audio: "whine.mp3", rarity: "Yaygın", weight: 58, isMusic: true, case: "muzik" },

        // Arabesk Kasası (arabesk)
        { id: "tec9_altinyaldizli", name: "Tec 9 - Altın Yaldızlı", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLlm5W5wipC6s2sabBkK8-WF2KD_vpzs7hWQyC0nQlpsWnRz9atIH3Gag4oCpQjFucP4Rfux9PuNr7j7wDZ3tgTny3_h3xPvzErvbgFFfz3Tg", rarity: "Yaygın", weight: 19, case: "arabesk" },
        { id: "p250_sari", name: "P250 - Sarı Endüstri", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhzMOwwjFU6s23bahhL-esHXCZ0-JJvOhuRz39xk9w62XRyNr9eCrDPwV0CpsiROAIsxC-kNyxNb7q71bcjY1GzXqsiTQJsHicAIc5kQ", rarity: "Yaygın", weight: 19, case: "arabesk" },
        { id: "awp_altinejderha", name: "AWP - Altın Ejderha", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf-jFk7uW-V6x0JOKSMWuZxuZi_uA7Syu2w0Ry4mqGzYypeH3DaAEnCpt0FuAK4RjrkoDgMb7mtFfcit5bjXKpX4RFZcA", rarity: "Yaygın", weight: 19, case: "arabesk" },
        { id: "ak47_miras", name: "AK47 - Miras", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiNQ0OKheqdoLPGaAFicyOl-pK8xGH_nwUt1sGrSz9ivcHKQOAcjXMYkRu5Yuxe4lYCyZOq25VSM2oMT02yg2UxBSEgA", rarity: "Yaygın", weight: 19, case: "arabesk" },
        { id: "m4a1s_vandal", name: "M4A1-S - Van-32", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_3HDzaD_v9jueJicCW6hAgutzyRk4D3HifOOV5kFJtwQLQCshW4kYazNOngsQGMj4tAyXj8iy1N7CxqsulQVqt0-aaFhwrfcepqI4yC_kU", rarity: "Nadir", weight: 15, case: "arabesk" },
        { id: "karambit_doppler", name: "Karambit - Lore", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Q7uCvZaZkNM-QG1ibwPx3vd5lQDu2qhEutDWR1IqrIHLCZlUmDJYlTLFb50HuwdyxPu2w4lCKjI5HniT2jS1PuCxj5e0cEf1y9ZCADXU", rarity: "Nadir", weight: 3, isRare: true, case: "arabesk" },

        // Kırılma Kasası (kirilma)
        { id: "famas_gerilla", name: "FAMAS - Gerilla", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL3n5vh7h1T9s24abZkI_GeAViUxP1zovVWQyC0nQlp4WXRn9qqI3uVblQgApJzELVb5BHqlYC1MePr71TXi91AzCz33S9KujErvbjpBPXbmw", rarity: "Yaygın", weight: 18, case: "kirilma" },
        { id: "p90_asit", name: "P90 - Asiimov", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLhx8bf_jdk_6v-JaV-KfmeAXGvzedxuPUnTSjikRgksjuBzoz4dXLFb1QoC8QlTLQD4EPqk4LvN-Pns1aMioNBzTK-0H3gQVv65g", rarity: "Yaygın", weight: 18, case: "kirilma" },
        { id: "ak47_kirmizi", name: "AK47 - Kırmızı", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wipC6s2vY_A6H_6cG3GVwPtJvOhuRz39zBsm5j-HyNqpd32fPVd1AsB3RbEP4xntwdPuM-jl4QaK2NpCzX_23DQJsHjpyGbntg", rarity: "Yaygın", weight: 18, case: "kirilma" },
        { id: "m4a4_kor", name: "M4A4 - Kor", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwiFO0P_6afBSMeWWC2mWwOdkqd5lRi67gVN35WyDwtv8IC-RblVxCpchQLIOuhK8xNG2YbnktAXZjthFxCiohntP8G81tOVu8Qhw", rarity: "Yaygın", weight: 18, case: "kirilma" },
        { id: "awp_buz", name: "AWP - Buz", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_DVL0PutbZtuL_GfC2OvzedxuPUnS3u3wR8lsTzTn4qqcXuXOlQmCpUiQOdYtUG_ltXgP-u04wWL3Y9NnjK-0H2dw8uldQ", rarity: "Nadir", weight: 12, case: "kirilma" },
        { id: "hunters_bowie", name: "Avcı Bıçağı - Laminalt", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1P7vG6YadsLM-UHViY1OBio-xoQRaxmRwkuAKJm4LwLyrTO2l8U8UoAfkJ5kTsmtfvNe7mswOL3YNByX_9338Y7ig44-cEV_Yk_PGBjgnCZeY7_9Bdc4dD_RHM", rarity: "Nadir", weight: 3, isRare: true, case: "kirilma" },
        { id: "hunters_karambit", name: "Avcı Bıçağı - Mor", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1P7vG6YadsLM-QG1iA1PxmvORWRzy9gQ4qsjO6lob-KT-JbFQlC5YhFrQN4xe4m4ezNL7g4QyLiItFyS772C5I7ilq6rpWUaYh-rqX0V82KISxGQ", rarity: "Nadir", weight: 3, isRare: true, case: "kirilma" },

        // Alev Kasası (alev)
        { id: "ak47_alev", name: "AK47 - Alev", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwlcK3wiFO0POlV7x_IemsAm6Xyfo44OQ_Tn3il08k4GzVyo2qeSnDaQAlXpF1RuZZsUO4kNLjNO2w51HWjJUFk3tTkVsnkA", rarity: "Yaygın", weight: 20, case: "alev" },
        { id: "glock_alev", name: "Glock 18 - Tavşan", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1Y-s2pZKtuK8-eAWie_vx3suNgWxa_nBovp3PXyo76Ii_FPAQmDMYiTLYDthm_kdbmZry2slCLjoMQzC7_3y1J7nts_a9cBi_qumx0", rarity: "Yaygın", weight: 20, case: "alev" },
        { id: "m4a4_alev", name: "M4A4 - Bola", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwi8P7qaRbqVhIfusAm6Xyfo44rc-GX21zU515mzVzYypIHvEa1IkCMYlQu4NukTqx9DhZLux4FbejZUFk3sZOZxOsw", rarity: "Yaygın", weight: 20, case: "alev" },
        { id: "awp_alev", name: "AWP - Alev", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLwiYbf_jdk7uW-V7NkLPSVB3WV_uJ_t-l9AX7rxhl-tmzSwomtdC6TPwQnW5UkR-YD5kK-ltCzP-Ox4FfXiNoQyyrgznQeu9L0PzQ", rarity: "Nadir", weight: 17, case: "alev" },
        { id: "alev_bowie", name: "Bowie Bıçağı - Otomatik", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1I-uC4YbJsLM-RAXCZxNFxo95rQD66kCImpimKjp32LyLEAVp5Xco0W-cIsEW9xty1Zb-z7gHd3o8UzSv3hypNvX0-tu5QWKMk-6XUjAiUYLAjoc5UIuuJ8AY", rarity: "Nadir", weight: 3, isRare: true, case: "alev" },

        // Orta Çağ Kasası (ortacag)
        { id: "usp_laminat", name: "USP-S - Beyaz Körlük", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyLkjYbf7itX6vytbbZSM_-sGW-Z1et5pfVWXSCjgRQjtgKJk4jxNWXCbQQpCJF1QLINsUbrlofgNunj5lSLg4sXnCT8jS5Oun445O8CUqUt5OSJ2Dgwztii", rarity: "Yaygın", weight: 23, case: "ortacag" },
        { id: "glock_laminat", name: "Glock 18 - Çelik", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL2kpnj9h1I4M2gYaNlNM-fB2CY1aAmtOU-S33jwEwhtWvdzIr4cHvCPwR1DZdxQrFZt0bsloLjP7jg4VGMlcsbmvNarNNc", rarity: "Yaygın", weight: 23, case: "ortacag" },
        { id: "m4a1s_laminat", name: "M4A1-S - Kara", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL8ypexwjFS4_ega6F_H_eAMWrEwL9lj-xgQzqjkB4YvzSCkpu3I3rGP1JxDJpwEbEJ40G6mtfjPuqx7wTf3d5AzHn5hy9AuH5p4u9QBb1lpPNjrdVvDA", rarity: "Yaygın", weight: 23, case: "ortacag" },
        { id: "bowie_laminalt", name: "Kelebek Bıçak - Su", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1Z-ua6bbZrLOmsBn6vzu1zse9WRCe6kxgY6m26lob-KT-JbgckDsR5TeRftkKwxN3mY7nq7wbci4hBzy783X5P7iZp67sEWaV0qbqX0V8sk0fSOA", rarity: "Nadir", weight: 3, isRare: true, case: "ortacag" },
        { id: "kancali_laminalt", name: "Kancalı Bıçak - Laminalt", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIGz3UqlXOLrxM-vMGmW8VNxu5Dx60noTyL6kJ_m-B1c-uaRe7RSNPGDC1iF0-x3vt5lRi67gVN0t2WGz9z8cHufa1IpX5skQbJbuxHtl9KxZu7ntgWM3o8Uziishi5J8G81tIA_RSBn", rarity: "Nadir", weight: 3, isRare: true, case: "ortacag" },

        // Müzik Kiti Kasası: EZ4ENCE %32, diğer mevcut müzik kitleri aynı havuzda korunur
        { id: "ez4ence", name: "EZ4ENCE", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGIijyEKzb_3d19nuIXOS81Nn_4z1-ErYEUy_ncG2pHQC66qtOfBsefHEWmTHkOgmtLRsSSq2w0ly4DvSmNipIy2TbRhgVMXK454YZg", audio: "ez4ence.mp3", rarity: "Yaygın", weight: 32, isMusic: true, case: "muzik", fixedChance: 0.32 },
    ];

    const CASE_TYPES = {
        kelebek: { name: "Kelebek Kasası", img: "kutu.png" },
        parlak: { name: "Parlak Kasa", img: "pembekasa.png" },
        muzik: { name: "Müzik Kiti Kasası", img: "yesilkasa.png" },
        hayalet: { name: "Hayalet Kasası", img: "itemkasası.png" },
        arabesk: { name: "Arabesk Kasası", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr3oVvvT4bfI4dvTLCGTCmLl16ec7TX_mk08k42iHwtqscy-WPVUmCZJ4R_lK7Ed8Q6OYtw" },
        kirilma: { name: "Kırılma Kasası", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fqWxdv_b8O_w5eKXBWWXHw-smtrBvTHDmwEsl4jvWn4z_I3qWZwV1X5ZwW6dU5RcRF1o0" },
        alev: { name: "Alev Kasası", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fr2wPtqP5PKVvJPSQDWSSl7sn6eMxHC3hwhl3sDuDztivJHrEagJzWZd3W6dU5fXcT7oM" },
        ortacag: { name: "Orta Çağ Kasası", img: "https://community.steamstatic.com/economy/image/i0CoZ81Ui0m-9KwlBY1L_18myuGuq1wfhWSaZgMttyVfPaERSR0Wqmu7LAocGJKz2lu_XsnXwtmkJjSU91dh8bj35VTqVBP4io_fpGxet6H-O_Q6dfXCDzfJl7ci6bZoG3zjx0xz4ziEztj8IiiRa1QkWZdwW6dU5RegDbP-" }
    };

    // KULLANICI VE ENVANTER VERİ YAPISI
    let currentUser = null;
    let isAuthModalRegisterMode = false;
    let isCaseOpening = false;
    let selectedCaseIndex = null;
    let activeContextItemIndex = null;
    let pendingDeleteItemIndex = null;
    let activeMusicKitAudio = null;
    let isMusicKitPlaying = false;
    let pendingGlobalChatNavigation = false;
    let globalChatEventSource = null;
    const GLOBAL_CHAT_TOPIC = 'weekproduct-global-chat-7f9c2b6d4e1a';
    const GLOBAL_CHAT_BASE_URL = `https://ntfy.sh/${GLOBAL_CHAT_TOPIC}`;
    const GLOBAL_CHAT_VISIBLE_MS = 24 * 60 * 60 * 1000;

    let userStore = {
        inventory: [],
        unlockedOrder: [],
        dropTimerSeconds: 3600
    };

    // LOCALSTORAGE YÜKLEME VE KAYDETME
    function getStoreKey() {
        return 'week_user_store_' + (currentUser || 'guest');
    }

    function loadUserData() {
        const savedData = localStorage.getItem(getStoreKey());
        if (savedData) {
            try {
                userStore = JSON.parse(savedData);
            } catch(e) { console.error(e); }
        } else {
            userStore = {
                inventory: [
                    { type: 'case', caseKey: 'kelebek', name: 'Kelebek Kasası', img: 'kutu.png' }
                ],
                unlockedOrder: [],
                dropTimerSeconds: 3600
            };
        }

        if (!userStore.inventory) userStore.inventory = [];
        if (!userStore.unlockedOrder) userStore.unlockedOrder = [];
        if (typeof userStore.dropTimerSeconds !== 'number') userStore.dropTimerSeconds = 3600;

        updateHeaderUnlockedRewards();
        renderCS2Inventory();
    }

    function saveUserData() {
        const storeKey = getStoreKey();

        // Upgrader index.html içinde iframe olarak açıkken kendi LocalStorage
        // yazma işlemini yapabilir. Ana sayfanın eski userStore'u her saniye
        // bunun üzerine yazıp Upgrader sonucunu ezmesin. Bu durumda yalnızca
        // ana sayfanın zamana bağlı alanını güncelleyip mevcut inventory/unlockedOrder
        // verisini LocalStorage'daki en güncel sürümden koruyoruz.
        if (typeof upgraderFrameOpen !== 'undefined' && upgraderFrameOpen) {
            let persistedStore = null;

            try {
                const raw = localStorage.getItem(storeKey);
                persistedStore = raw ? JSON.parse(raw) : null;
            } catch (error) {
                persistedStore = null;
            }

            if (!persistedStore || typeof persistedStore !== 'object') {
                persistedStore = {};
            }

            persistedStore.inventory = Array.isArray(persistedStore.inventory)
                ? persistedStore.inventory
                : (userStore.inventory || []);
            persistedStore.unlockedOrder = Array.isArray(persistedStore.unlockedOrder)
                ? persistedStore.unlockedOrder
                : (userStore.unlockedOrder || []);
            persistedStore.dropTimerSeconds = userStore.dropTimerSeconds;

            localStorage.setItem(storeKey, JSON.stringify(persistedStore));

            updateHeaderUnlockedRewards();
            renderCS2Inventory();
            return;
        }

        localStorage.setItem(storeKey, JSON.stringify(userStore));
        updateHeaderUnlockedRewards();
        renderCS2Inventory();
    }

    // HOURLY DROP SÜRESİ MANTIĞI (60 DAKİKA)
    setInterval(() => {
        if (userStore.dropTimerSeconds > 0) {
            userStore.dropTimerSeconds--;
        } else {
            userStore.dropTimerSeconds = 3600;
            grantRandomCaseDrop();
        }
        updateDropTimerUI();
        saveUserData();
    }, 1000);

    function updateDropTimerUI() {
        const minutes = Math.floor(userStore.dropTimerSeconds / 60);
        const clockEl = document.getElementById('drop-timer-clock');
        if (clockEl) {
            clockEl.innerText = minutes + 'DK';
        }
    }

    function grantRandomCaseDrop() {
        const rand = Math.random() * 100;
        let droppedCaseKey = 'kelebek';

        if (rand < 25) {
            droppedCaseKey = 'kelebek';
        } else if (rand < 50) {
            droppedCaseKey = 'parlak';
        } else if (rand < 75) {
            droppedCaseKey = 'muzik';
        } else {
            droppedCaseKey = 'hayalet';
        }

        const caseInfo = CASE_TYPES[droppedCaseKey];
        userStore.inventory.push({
            type: 'case',
            caseKey: droppedCaseKey,
            name: caseInfo.name,
            img: caseInfo.img
        });

        saveUserData();
    }

    // OTURUM YÖNETİMİ
    function checkSessionOnLoad() {
        const activeUser = localStorage.getItem('week_active_user');
        if (activeUser) {
            currentUser = activeUser;
            document.getElementById('auth-main-btn').innerText = "Çıkış Yap";
        } else {
            document.getElementById('auth-main-btn').innerText = "Oturum Aç";
        }
        loadUserData();
    }

    function handleAuthBtnClick() {
        if (currentUser) {
            currentUser = null;
            localStorage.removeItem('week_active_user');
            closeGlobalChatStream();
            document.getElementById('auth-main-btn').innerText = "Oturum Aç";
            loadUserData();
            navigate('main-page');
        } else {
            openAuthModal();
        }
    }

    function openAuthModal() { document.getElementById('auth-modal').classList.add('active'); }
    function closeAuthModal() { document.getElementById('auth-modal').classList.remove('active'); }

    function toggleAuthMode() {
        isAuthModalRegisterMode = !isAuthModalRegisterMode;
        const title = document.getElementById('auth-modal-title');
        const submitBtn = document.getElementById('auth-submit-btn');
        const toggleBtn = document.getElementById('auth-toggle-btn');

        if (isAuthModalRegisterMode) {
            title.innerText = "Kayıt Ol";
            submitBtn.innerText = "Hesap Oluştur";
            toggleBtn.innerText = "Zaten hesabın var mı? Giriş Yap";
        } else {
            title.innerText = "Oturum Aç";
            submitBtn.innerText = "Giriş Yap";
            toggleBtn.innerText = "Hesabın yok mu? Kayıt Ol";
        }
    }

    function handleAuthSubmit(e) {
        e.preventDefault();
        const username = document.getElementById('auth-username').value.trim();
        const password = document.getElementById('auth-password').value;

        if (!username || !password) {
            return;
        }

        const accounts = JSON.parse(localStorage.getItem('week_accounts') || '{}');

        if (isAuthModalRegisterMode) {
            if (accounts[username]) {
            } else {
                accounts[username] = password;
                localStorage.setItem('week_accounts', JSON.stringify(accounts));
                toggleAuthMode();
                document.getElementById('auth-password').value = "";
            }
        } else {
            if (!accounts[username] || accounts[username] !== password) {
            } else {
                currentUser = username;
                localStorage.setItem('week_active_user', username);
                document.getElementById('auth-main-btn').innerText = "Çıkış Yap";
                closeAuthModal();
                loadUserData();

                if (pendingGlobalChatNavigation) {
                    pendingGlobalChatNavigation = false;
                    navigate('global-chat-page');
                }
            }
        }
    }

    // GLOBAL SOHBET
    function openGlobalChat() {
        if (!currentUser) {
            pendingGlobalChatNavigation = true;
            openAuthModal();
            return;
        }

        navigate('global-chat-page');
    }

    function closeGlobalChatStream() {
        if (globalChatEventSource) {
            globalChatEventSource.close();
            globalChatEventSource = null;
        }
    }

    function setGlobalChatStatus(text) {
        const status = document.getElementById('global-chat-status');
        if (status) status.textContent = text;
    }

    function formatGlobalChatTime(timestamp) {
        return new Date(timestamp).toLocaleTimeString('tr-TR', {
            hour: '2-digit',
            minute: '2-digit'
        });
    }

    function isGlobalChatPayloadExpired(sentAt) {
        return Date.now() - Number(sentAt || 0) > GLOBAL_CHAT_VISIBLE_MS;
    }

    function createGlobalChatMessageElement(payload) {
        const wrapper = document.createElement('div');
        const isMine = payload.username === currentUser;

        wrapper.className = `global-chat-message ${isMine ? 'mine' : 'other'}`;

        const meta = document.createElement('div');
        meta.className = 'global-chat-message-meta';

        const username = document.createElement('span');
        username.className = 'global-chat-message-user';
        username.textContent = payload.username;

        const time = document.createElement('span');
        time.className = 'global-chat-message-time';
        time.textContent = formatGlobalChatTime(payload.sentAt);

        meta.appendChild(username);
        meta.appendChild(time);

        const body = document.createElement('div');
        body.className = 'global-chat-message-body';
        body.textContent = payload.text;

        wrapper.appendChild(meta);
        wrapper.appendChild(body);

        return wrapper;
    }

    function renderGlobalChatMessage(payload, prepend = false) {
        if (!payload || !payload.username || !payload.text || isGlobalChatPayloadExpired(payload.sentAt)) return;

        const container = document.getElementById('global-chat-messages');
        if (!container) return;

        if (payload.id && Array.from(container.children).some(el => el.dataset.chatId === payload.id)) return;

        const element = createGlobalChatMessageElement(payload);
        if (payload.id) element.dataset.chatId = payload.id;
        element.dataset.sentAt = String(payload.sentAt);

        if (prepend) {
            container.prepend(element);
        } else {
            const shouldStickToBottom = container.scrollHeight - container.scrollTop - container.clientHeight < 80;
            container.appendChild(element);
            if (shouldStickToBottom || element.classList.contains('mine')) {
                container.scrollTop = container.scrollHeight;
            }
        }
    }

    function cleanupExpiredGlobalChatMessages() {
        const container = document.getElementById('global-chat-messages');
        if (!container) return;

        Array.from(container.children).forEach(element => {
            const messageTime = Number(element.dataset.sentAt || 0);
            if (messageTime && isGlobalChatPayloadExpired(messageTime)) {
                element.remove();
            }
        });
    }

    function handleGlobalChatEvent(event) {
        if (!event.data) return;

        try {
            const message = JSON.parse(event.data);
            if (message.event !== 'message' || !message.message) return;

            const payload = JSON.parse(message.message);
            payload.id = message.id;
            payload.sentAt = Number(payload.sentAt || (message.time * 1000));

            if (isGlobalChatPayloadExpired(payload.sentAt)) return;

            renderGlobalChatMessage(payload);
        } catch (error) {
            console.warn('Global sohbet mesajı okunamadı:', error);
        }
    }

    function connectGlobalChat() {
        if (!currentUser) return;

        closeGlobalChatStream();

        const container = document.getElementById('global-chat-messages');
        if (container) container.innerHTML = '';

        setGlobalChatStatus('Bağlanıyor...');

        globalChatEventSource = new EventSource(`${GLOBAL_CHAT_BASE_URL}/sse?since=12h`);

        globalChatEventSource.onopen = () => {
            setGlobalChatStatus('Çevrimiçi');
        };

        globalChatEventSource.onmessage = handleGlobalChatEvent;

        globalChatEventSource.onerror = () => {
            setGlobalChatStatus('Yeniden bağlanıyor...');
        };

        cleanupExpiredGlobalChatMessages();
    }

    async function sendGlobalChatMessage(event) {
        event.preventDefault();

        if (!currentUser) {
            openGlobalChat();
            return;
        }

        const input = document.getElementById('global-chat-input');
        if (!input) return;

        const text = input.value.trim();
        if (!text) return;

        const payload = {
            username: currentUser,
            text: text.slice(0, 500),
            sentAt: Date.now()
        };

        input.value = '';

        try {
            const response = await fetch(GLOBAL_CHAT_BASE_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Title': `${currentUser} - Global Sohbet`
                },
                body: JSON.stringify(payload)
            });

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}`);
            }
        } catch (error) {
            console.warn('Global sohbet mesajı gönderilemedi:', error);
            input.value = text;
            setGlobalChatStatus('Mesaj gönderilemedi');
        }
    }

    setInterval(cleanupExpiredGlobalChatMessages, 60 * 1000);

    function navigate(pageId) {
        hideContextMenu();
        document.querySelectorAll('.page').forEach(page => page.classList.remove('active'));
        const targetPage = document.getElementById(pageId);
        if (targetPage) targetPage.classList.add('active');

        if (pageId === 'collectors-page') {
            renderCS2Inventory();
        }

        if (pageId === 'main-page') {
            playMainLogoAnimation();
        }

        if (pageId === 'yedek-ana-menu-page') {
            updateCompetitiveEloDisplay();
        }

        if (pageId === 'global-chat-page') {
            if (!currentUser) {
                pendingGlobalChatNavigation = true;
                openAuthModal();
                return;
            }
            connectGlobalChat();
            const input = document.getElementById('global-chat-input');
            if (input) setTimeout(() => input.focus(), 0);
        } else {
            closeGlobalChatStream();
        }
    }

    function updateHeaderUnlockedRewards() {
        const bar = document.getElementById('unlocked-rewards-bar');
        if (!bar) return;
        bar.innerHTML = '';

        if (!userStore || !userStore.unlockedOrder) return;

        userStore.unlockedOrder.forEach(rewardId => {
            const badge = document.createElement('div');
            badge.className = 'reward-badge-container';
            badge.onclick = () => removeRewardFromHeader(rewardId);

            badge.innerHTML = `
                <img src="pembekasa.png" class="reward-badge-icon" alt="Ödül">
                <div class="reward-badge-tooltip">
                    <div class="reward-badge-title">Eski Ödül</div>
                    <div class="reward-badge-rarity">Kaldırmak İçin Tıkla</div>
                </div>
            `;
            bar.appendChild(badge);
        });
    }

    function removeRewardFromHeader(rewardId) {
        userStore.unlockedOrder = userStore.unlockedOrder.filter(id => id !== rewardId);
        saveUserData();
    }

    // CS2 ENVANTER ARAYÜZÜ RENDER
    function renderCS2Inventory() {
        const grid = document.getElementById('cs2-inventory-grid');
        if (!grid) return;

        grid.innerHTML = '';
        const items = userStore.inventory || [];

        items.forEach((item, index) => {
            const card = document.createElement('div');
            card.className = 'cs2-item-card';
            card.onclick = (e) => showCS2ContextMenu(e, index);

            card.innerHTML = `
                <div class="cs2-item-img-wrap">
                    <img src="${item.img}" class="cs2-item-img" alt="${item.name}">
                </div>
                <div class="cs2-item-title">${item.name}</div>
            `;
            grid.appendChild(card);
        });
    }

    // SAĞ/SOL TIK İLE CS2 SAĞ TIK MENÜSÜ GÖSTERME
    function showCS2ContextMenu(e, itemIndex) {
        e.stopPropagation();
        activeContextItemIndex = itemIndex;
        const item = userStore.inventory[itemIndex];
        if (!item) return;

        const menu = document.getElementById('cs2-context-menu');
        const actionBtn = document.getElementById('cs2-ctx-action-btn');
        const tradeBtn = document.getElementById('cs2-ctx-trade-btn');
        const mergeBtn = document.getElementById('cs2-ctx-merge-btn');
        const deleteBtn = document.getElementById('cs2-ctx-delete-btn');

        actionBtn.style.display = 'flex';
        tradeBtn.style.display = 'none';
        mergeBtn.style.display = 'none';

        if (item.type === 'case') {
            actionBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0L4 7.27A2 2 0 0 0 3 9v7a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4a2 2 0 0 0 2 0L21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg> Aç';
            actionBtn.onclick = () => {
                hideContextMenu();
                prepareCaseOpeningView(itemIndex);
            };
        } else if (item.isMusic) {
            if (isMusicKitPlaying) {
                actionBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><rect x="4" y="4" width="16" height="16"></rect></svg> Müziği Durdur';
                actionBtn.onclick = () => {
                    hideContextMenu();
                    stopMusicKit();
                };
            } else {
                actionBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"></path><circle cx="6" cy="18" r="3"></circle><circle cx="18" cy="16" r="3"></circle></svg> Müziği Çal';
                actionBtn.onclick = () => {
                    hideContextMenu();
                    playMusicKit(item);
                };
            }

            tradeBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 0 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Takas';
            tradeBtn.style.display = 'flex';
            tradeBtn.onclick = () => {
                hideContextMenu();
                startTrade(itemIndex);
            };
        } else {
            actionBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 20h9"></path><path d="M16.5 3.5a2.121 2.121 0 0 0 3 0 6 6 0 0 0 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg> Takas';
            actionBtn.onclick = () => {
                hideContextMenu();
                startTrade(itemIndex);
            };
        }

        if (item.type === 'item' && !item.isMusic && !item.isRare) {
            mergeBtn.innerHTML = '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 3v18M3 12h18"></path></svg> Birleştir';
            mergeBtn.style.display = 'flex';
            mergeBtn.onclick = () => { hideContextMenu(); openMergeModal(itemIndex); };
        }

        deleteBtn.onclick = () => {
            hideContextMenu();
            openDeleteItemModal(itemIndex);
        };

        menu.style.left = `${e.clientX}px`;
        menu.style.top = `${e.clientY}px`;
        menu.style.display = 'flex';
    }

    function hideContextMenu() {
        const menu = document.getElementById('cs2-context-menu');
        if (menu) menu.style.display = 'none';
    }

    document.addEventListener('click', hideContextMenu);

    // KASA AÇMA HAZIRLIK VE ARAYÜZ
    function prepareCaseOpeningView(index) {
        selectedCaseIndex = index;
        const caseItem = userStore.inventory[index];
        if (!caseItem) return;

        document.getElementById('case-title-text').innerText = caseItem.name;
        document.getElementById('case-title-img').src = caseItem.img;
        document.getElementById('case-open-page-title').style.display = 'flex';

        const caseImg = document.getElementById('case-image');
        caseImg.src = caseItem.img;
        caseImg.classList.remove('case-rising');

        document.getElementById('case-display-stage').style.display = 'flex';
        document.getElementById('cs2-reel-wrapper').style.display = 'none';
        document.getElementById('case-result-display').innerText = 'Kasayı açmaya hazır mısın?';

        const btn = document.getElementById('open-case-btn');
        btn.innerText = 'AÇ';
        btn.disabled = false;

        navigate('case-open-page');
    }

    // CS2 KASA AÇMA MANTIK VE ANİMASYONU
    function startCS2CaseOpening() {
        if (selectedCaseIndex === null || isCaseOpening) return;

        const caseItem = userStore.inventory[selectedCaseIndex];
        if (!caseItem) return;

        isCaseOpening = true;

        // Sayaç yalnızca gerçek "AÇ" butonuna basıldığı anda artar.
        incrementCaseCounter();

        const btn = document.getElementById('open-case-btn');
        btn.disabled = true;

        document.getElementById('case-open-page-title').style.display = 'none';

        const openAudio = new Audio('caseopening.mp3');
        openAudio.play().catch(e => console.log('Audio autoplay blocked', e));

        const caseStage = document.getElementById('case-display-stage');
        const caseImg = document.getElementById('case-image');
        caseImg.classList.add('case-rising');
        document.getElementById('case-result-display').innerText = 'Kasa açılıyor...';

        setTimeout(() => {
            caseStage.style.display = 'none';
            const reelWrapper = document.getElementById('cs2-reel-wrapper');
            const reelTrack = document.getElementById('cs2-reel-track');
            reelWrapper.style.display = 'block';

            const casePool = REWARDS_DEF.filter(r => r.case === caseItem.caseKey);
            const winningItem = rollCaseItem(caseItem.caseKey);

            reelTrack.innerHTML = '';
            const totalReelItems = 70;
            const winningIndex = 55;

            for (let i = 0; i < totalReelItems; i++) {
                let itemDef;
                if (i === winningIndex) {
                    itemDef = winningItem;
                } else {
                    itemDef = casePool[Math.floor(Math.random() * casePool.length)];
                }

                const itemEl = document.createElement('div');
                itemEl.className = 'cs2-reel-item';
                itemEl.innerHTML = `
                    <img src="${itemDef.img}" alt="${itemDef.name}">
                    <div class="cs2-reel-item-name">${itemDef.name}</div>
                `;
                reelTrack.appendChild(itemEl);
            }

            reelTrack.style.transition = 'none';
            reelTrack.style.transform = 'translateX(0px)';

            const itemWidth = 120;
            const wrapperWidth = reelWrapper.offsetWidth;
            const targetOffset = (winningIndex * itemWidth) - (wrapperWidth / 2) + (itemWidth / 2) + (Math.random() * 40 - 20);

            setTimeout(() => {
                reelTrack.style.transition = 'transform 10s cubic-bezier(0.1, 0.85, 0.25, 1)';
                reelTrack.style.transform = `translateX(-${targetOffset}px)`;
            }, 50);

            setTimeout(() => {
                userStore.inventory.splice(selectedCaseIndex, 1);
                selectedCaseIndex = null;

                userStore.inventory.push({
                    type: 'item',
                    id: winningItem.id,
                    name: winningItem.name,
                    img: winningItem.img,
                    audio: winningItem.audio,
                    isMusic: winningItem.isMusic,
                    isRare: winningItem.isRare,
                    case: winningItem.case
                });

                saveUserData();
                showRewardWinModal(winningItem);

                isCaseOpening = false;
                btn.disabled = false;
            }, 10000);

        }, 2000);
    }

    function rollCaseItem(caseKey) {
        const pool = REWARDS_DEF.filter(r => r.case === caseKey);

        if (caseKey === 'muzik') {
            if (Math.random() < 0.32) return pool.find(r => r.id === 'ez4ence');
            const other = pool.filter(r => r.id !== 'ez4ence');
            let rand = Math.random() * other.reduce((s, r) => s + r.weight, 0);
            for (const r of other) {
                if (rand < r.weight) return r;
                rand -= r.weight;
            }
            return other[0];
        }

        if (['kirilma','alev','ortacag'].includes(caseKey)) {
            const specials = pool.filter(r => r.isRare);
            const specialChance = specials.length * 0.03;
            const roll = Math.random();

            if (roll < specialChance) {
                const specialRoll = Math.random() * (specials.length * 3);
                let specialAccum = 0;

                for (const r of specials) {
                    specialAccum += 3;
                    if (specialRoll < specialAccum) return r;
                }
            }

            const normal = pool.filter(r => !r.isRare);
            const totalNormalWeight = normal.reduce((sum, r) => sum + r.weight, 0);
            let rand = Math.random() * totalNormalWeight;

            for (const r of normal) {
                if (rand < r.weight) return r;
                rand -= r.weight;
            }

            return normal[0];
        }

        let totalWeight = pool.reduce((sum, r) => sum + r.weight, 0);
        let rand = Math.random() * totalWeight;

        for (let r of pool) {
            if (rand < r.weight) return r;
            rand -= r.weight;
        }

        return pool[0];
    }

    function showRewardWinModal(item) {
        document.getElementById('reward-win-img').src = item.img;
        document.getElementById('reward-win-title').innerText = item.name;
        document.getElementById('reward-win-modal').classList.add('active');
    }

    function closeRewardWinModal() {
        document.getElementById('reward-win-modal').classList.remove('active');
        navigate('collectors-page');
    }

    // TAKAS (TRADE) SİSTEMİ
    function startTrade(index) {
        const item = userStore.inventory[index];
        document.getElementById('trade-modal').classList.add('active');

        setTimeout(() => {
            userStore.inventory.splice(index, 1);

            const caseKeys = ['arabesk', 'kirilma', 'alev', 'ortacag', 'hayalet', 'muzik', 'parlak', 'kelebek'];
            let casesToGive = item.isRare ? 3 : 1;

            for (let i = 0; i < casesToGive; i++) {
                const randomKey = caseKeys[Math.floor(Math.random() * caseKeys.length)];
                const caseInfo = CASE_TYPES[randomKey];

                userStore.inventory.push({
                    type: 'case',
                    caseKey: randomKey,
                    name: caseInfo.name,
                    img: caseInfo.img
                });
            }

            saveUserData();
            document.getElementById('trade-modal').classList.remove('active');

            if (document.getElementById('collectors-page').classList.contains('active')) {
                renderCS2Inventory();
            }
        }, 2000);
    }

    // BİRLEŞTİRME SİSTEMİ
    let mergeSourceIndex = null, mergeSelected = [];

    function getItemCase(item) {
        return item.case || (REWARDS_DEF.find(r => r.id === item.id) || {}).case;
    }

    function openMergeModal(index) {
        const item = userStore.inventory[index];

        if (!item || item.type !== 'item' || item.isMusic || item.isRare) return;

        const caseKey = getItemCase(item);
        if (!caseKey) return;

        mergeSourceIndex = index;
        mergeSelected = [];

        const list = userStore.inventory
            .map((x, i) => ({ x, i }))
            .filter(o => o.x.type === 'item' && !o.x.isMusic && !o.x.isRare && getItemCase(o.x) === caseKey);

        const grid = document.getElementById('merge-grid');
        grid.innerHTML = '';

        list.forEach(({ x, i }) => {
            const el = document.createElement('div');
            el.className = 'merge-item';
            el.dataset.index = i;
            el.innerHTML = `<img src="${x.img}" alt="${x.name}"><div>${x.name}</div>`;
            el.onclick = () => toggleMergeSelection(i, el);
            grid.appendChild(el);
        });

        updateMergeButton();
        document.getElementById('merge-modal').classList.add('active');
    }

    function toggleMergeSelection(index, el) {
        const pos = mergeSelected.indexOf(index);

        if (pos >= 0) {
            mergeSelected.splice(pos, 1);
            el.classList.remove('selected');
        } else if (mergeSelected.length < 10) {
            mergeSelected.push(index);
            el.classList.add('selected');
        }

        updateMergeButton();
    }

    function updateMergeButton() {
        document.getElementById('merge-count').innerText = `${mergeSelected.length} / 10 seçildi`;

        const b = document.getElementById('merge-confirm-btn');
        const ok = mergeSelected.length === 10;

        b.disabled = !ok;
        b.style.opacity = ok ? '1' : '.5';
        b.onclick = combineSelectedItems;
    }

    function closeMergeModal() {
        document.getElementById('merge-modal').classList.remove('active');
        mergeSourceIndex = null;
        mergeSelected = [];
    }

    function combineSelectedItems() {
        if (mergeSelected.length !== 10) return;

        const first = userStore.inventory[mergeSelected[0]];
        const caseKey = getItemCase(first);

        if (!caseKey) return;

        const rares = REWARDS_DEF.filter(r => r.case === caseKey && r.isRare);
        if (!rares.length) return;

        const won = rares[Math.floor(Math.random() * rares.length)];

        [...mergeSelected]
            .sort((a, b) => b - a)
            .forEach(i => userStore.inventory.splice(i, 1));

        userStore.inventory.push({
            type: 'item',
            id: won.id,
            name: won.name,
            img: won.img,
            case: won.case,
            isRare: true
        });

        saveUserData();
        closeMergeModal();

        document.getElementById('merge-win-img').src = won.img;
        document.getElementById('merge-win-title').innerText = won.name;
        document.getElementById('merge-win-modal').classList.add('active');
    }

    function closeMergeWinModal() {
        document.getElementById('merge-win-modal').classList.remove('active');
        navigate('collectors-page');
    }

    // MÜZİK KİTİ ÇALMA / DURDURMA
    function playMusicKit(item) {
        if (activeMusicKitAudio) {
            activeMusicKitAudio.pause();
            activeMusicKitAudio.currentTime = 0;
        }

        activeMusicKitAudio = new Audio(item.audio || 'musicletithappen.mp3');
        activeMusicKitAudio.loop = true;

        const playPromise = activeMusicKitAudio.play();

        if (playPromise && typeof playPromise.catch === 'function') {
            playPromise.catch(() => {});
        }

        isMusicKitPlaying = true;
    }

    function stopMusicKit() {
        if (activeMusicKitAudio) {
            activeMusicKitAudio.pause();
            activeMusicKitAudio.currentTime = 0;
            activeMusicKitAudio = null;
        }

        isMusicKitPlaying = false;
    }

    // AÇILAN KASA SAYACI
    // CountAPI uyumlu, herkeste ortak çalışan global sayaç.
    // Yeni key kullanıldığı için eski localStorage sayacı tamamen devre dışı kalır ve sayaç 0'dan başlar.
    const CASE_COUNTER_API_BASE = 'https://countapi.mileshilliard.com/api/v1';
    const CASE_COUNTER_KEY = 'weekproduct_opened_cases_global_v2';
    const CASE_COUNTER_SYNC_INTERVAL = 3000;
    let openedCaseCounter = 0;
    let caseCounterSyncTimer = null;

    function formatCaseCounter(value) {
        return Math.max(0, Math.floor(Number(value) || 0)).toLocaleString('tr-TR');
    }

    function updateCaseCounterDisplay() {
        const counter = document.getElementById('case-counter-value');
        if (counter) counter.textContent = formatCaseCounter(openedCaseCounter);
    }

    async function fetchCaseCounter() {
        try {
            const response = await fetch(`${CASE_COUNTER_API_BASE}/get/${CASE_COUNTER_KEY}`, {
                method: 'GET',
                cache: 'no-store'
            });

            if (!response.ok) {
                if (response.status === 404) {
                    openedCaseCounter = 0;
                    updateCaseCounterDisplay();
                }
                return;
            }

            const data = await response.json();
            if (data && data.value !== undefined) {
                openedCaseCounter = Math.max(0, Math.floor(Number(data.value) || 0));
                updateCaseCounterDisplay();
            }
        } catch (error) {
            console.warn('Kasa sayacı okunamadı:', error);
        }
    }

    async function incrementCaseCounter() {
        try {
            const response = await fetch(`${CASE_COUNTER_API_BASE}/hit/${CASE_COUNTER_KEY}`, {
                method: 'GET',
                cache: 'no-store'
            });

            if (!response.ok) return;

            const data = await response.json();
            if (data && data.value !== undefined) {
                openedCaseCounter = Math.max(0, Math.floor(Number(data.value) || 0));
                updateCaseCounterDisplay();
            } else {
                await fetchCaseCounter();
            }
        } catch (error) {
            console.warn('Kasa sayacı artırılamadı:', error);
            await fetchCaseCounter();
        }
    }

    function startCaseCounterSync() {
        fetchCaseCounter();

        if (caseCounterSyncTimer) {
            clearInterval(caseCounterSyncTimer);
        }

        caseCounterSyncTimer = setInterval(() => {
            fetchCaseCounter();
        }, CASE_COUNTER_SYNC_INTERVAL);
    }

    startCaseCounterSync();

    // REKABETÇİ / ELO SİSTEMİ
    const COMPETITIVE_ELO_KEY = 'week_competitive_elo';
    const DEFAULT_COMPETITIVE_ELO = 5000;
    let competitiveMatchTimer = null;
    let competitiveMatchTimeout = null;
    let competitiveMatchAudio = null;
    let competitiveClickAudio = null;
    let competitiveMatchFinished = false;

    function formatElo(value) {
        return Math.max(0, Math.floor(Number(value) || 0)).toLocaleString('tr-TR');
    }

    function getCompetitiveElo() {
        const saved = localStorage.getItem(COMPETITIVE_ELO_KEY);

        if (saved !== null && !Number.isNaN(Number(saved))) {
            return Math.max(0, Math.floor(Number(saved)));
        }

        localStorage.setItem(
            COMPETITIVE_ELO_KEY,
            String(DEFAULT_COMPETITIVE_ELO)
        );

        return DEFAULT_COMPETITIVE_ELO;
    }

    function saveCompetitiveElo(value) {
        const safeValue = Math.max(
            0,
            Math.floor(Number(value) || 0)
        );

        localStorage.setItem(
            COMPETITIVE_ELO_KEY,
            String(safeValue)
        );

        updateCompetitiveEloDisplay();
    }

    function updateCompetitiveEloDisplay() {
        const eloValue = document.getElementById('elo-value');

        if (eloValue) {
            eloValue.textContent = formatElo(getCompetitiveElo());
        }
    }

    function resetCompetitiveMatchUI() {
        if (competitiveMatchTimer) {
            clearTimeout(competitiveMatchTimer);
            competitiveMatchTimer = null;
        }

        if (competitiveMatchTimeout) {
            clearTimeout(competitiveMatchTimeout);
            competitiveMatchTimeout = null;
        }

        const text = document.getElementById('match-search-text');
        const button = document.getElementById('match-search-btn');

        if (text) {
            text.textContent = '';
            text.classList.remove('searching');
        }

        if (button) {
            button.disabled = false;
            button.classList.remove('searching');
        }

        competitiveMatchFinished = false;
    }

    function playCompetitiveAudio(file) {
        const audio = new Audio(file);
        audio.play().catch(() => {});
        return audio;
    }

    function startCompetitiveMatch() {
        const button = document.getElementById('match-search-btn');
        const text = document.getElementById('match-search-text');

        if (!button || !text || button.disabled) return;

        if (competitiveMatchTimer) {
            clearTimeout(competitiveMatchTimer);
        }

        if (competitiveMatchTimeout) {
            clearTimeout(competitiveMatchTimeout);
        }

        button.disabled = true;
        button.classList.add('searching');

        text.textContent = 'Maç Aranıyor...';
        text.classList.remove('searching');

        void text.offsetWidth;

        text.classList.add('searching');

        competitiveMatchTimer = setTimeout(() => {
            openCompetitiveMatchFoundModal();
        }, 10000);
    }

    function openCompetitiveMatchFoundModal() {
        const modal = document.getElementById('competitive-match-modal');
        const matchTitle = document.getElementById('competitive-match-title');
        const matchContent = document.getElementById('competitive-match-content');
        const acceptButton = document.getElementById('competitive-accept-btn');

        if (!modal || !matchTitle || !matchContent || !acceptButton) return;

        matchTitle.textContent = 'Maç Bulundu';

        matchContent.innerHTML = `
            <button id="competitive-accept-btn"
                class="competitive-accept-btn"
                onclick="acceptCompetitiveMatch()">
                Kabul Et
            </button>
        `;

        modal.classList.remove('active');

        void modal.offsetWidth;

        modal.classList.add('active');

        competitiveMatchAudio = playCompetitiveAudio('macbulundu.mp3');

        competitiveMatchFinished = false;
    }

    function acceptCompetitiveMatch() {
        if (competitiveMatchFinished) return;

        competitiveClickAudio = playCompetitiveAudio('tiklama.mp3');

        const matchTitle = document.getElementById('competitive-match-title');
        const matchContent = document.getElementById('competitive-match-content');

        if (!matchTitle || !matchContent) return;

        matchTitle.textContent = 'Maç Bulundu';

        matchContent.innerHTML = `
            <div class="competitive-joining-text">
                Katılınıyor
            </div>
        `;

        competitiveMatchFinished = true;

        competitiveMatchTimeout = setTimeout(() => {
            showCompetitiveMatchFinished();
        }, 5000);
    }

    function showCompetitiveMatchFinished() {
        const matchTitle = document.getElementById('competitive-match-title');
        const matchContent = document.getElementById('competitive-match-content');

        if (!matchTitle || !matchContent) return;

        matchTitle.textContent = 'Maç Bitti!';

        matchContent.innerHTML = `
            <div class="competitive-result-buttons">
                <button
                    class="competitive-result-btn win"
                    onclick="finishCompetitiveMatch('win')">
                    Kazandım
                </button>

                <button
                    class="competitive-result-btn lose"
                    onclick="finishCompetitiveMatch('lose')">
                    Kaybettim
                </button>
            </div>
        `;
    }

    function finishCompetitiveMatch(result) {
        const currentElo = getCompetitiveElo();
        let newElo = currentElo;

        if (currentElo >= 30000) {
            newElo += result === 'win' ? -100 : -75;
        } else {
            newElo += result === 'win' ? 500 : -250;
        }

        saveCompetitiveElo(Math.max(0, newElo));

        const modal = document.getElementById('competitive-match-modal');

        if (modal) {
            modal.classList.remove('active');
        }

        resetCompetitiveMatchUI();
    }

    function closeCompetitiveMatchModal() {
        const modal = document.getElementById('competitive-match-modal');

        if (modal) {
            modal.classList.remove('active');
        }

        resetCompetitiveMatchUI();
    }

    function resetCompetitiveEloWithInsert() {
        if (
            document
                .getElementById('yedek-ana-menu-page')
                ?.classList.contains('active')
        ) {
            saveCompetitiveElo(DEFAULT_COMPETITIVE_ELO);
            resetCompetitiveMatchUI();

            const modal = document.getElementById('competitive-match-modal');

            if (modal) {
                modal.classList.remove('active');
            }
        }
    }

    function initCompetitivePage() {
        updateCompetitiveEloDisplay();

        window.addEventListener('keydown', (e) => {
            if (
                e.key === 'Insert' &&
                document
                    .getElementById('yedek-ana-menu-page')
                    ?.classList.contains('active')
            ) {
                e.preventDefault();
                resetCompetitiveEloWithInsert();
                return;
            }

            if (
                (e.key === 'i' || e.key === 'I') &&
                e.ctrlKey &&
                document
                    .getElementById('social-page')
                    ?.classList.contains('active')
            ) {
                e.preventDefault();
                navigate('yedek-ana-menu-page');
                updateCompetitiveEloDisplay();
            }
        });
    }

    // MODAL FONKSİYONLARI
    function openModal(type) {
        const modal = document.getElementById('custom-modal');
        const textEl = document.getElementById('modal-content-text');

        if (type === 'Discord') {
            textEl.innerHTML = "Discord Kullanıcı Adım:<br><b>zyleak69</b>";
        } else {
            textEl.innerHTML = "Şu anlık bu pencere aktif değil.";
        }

        modal.classList.add('active');
    }

    function closeModal() {
        document.getElementById('custom-modal').classList.remove('active');
    }

    // TEK İTEM SİLME İŞLEMLERİ
    function openDeleteItemModal(index) {
        if (index === null || index === undefined) return;
        if (!userStore.inventory[index]) return;

        pendingDeleteItemIndex = index;

        document
            .getElementById('delete-item-modal')
            .classList.add('active');
    }

    function closeDeleteItemModal() {
        pendingDeleteItemIndex = null;

        document
            .getElementById('delete-item-modal')
            .classList.remove('active');
    }

    function deleteSelectedItem() {
        if (pendingDeleteItemIndex === null) return;

        const item = userStore.inventory[pendingDeleteItemIndex];

        if (!item) {
            closeDeleteItemModal();
            return;
        }

        if (item.isMusic && activeMusicKitAudio) {
            activeMusicKitAudio.pause();
            activeMusicKitAudio = null;
            isMusicKitPlaying = false;
        }

        userStore.inventory.splice(
            pendingDeleteItemIndex,
            1
        );

        pendingDeleteItemIndex = null;

        saveUserData();

        document
            .getElementById('delete-item-modal')
            .classList.remove('active');
    }

    // YENİ: Envanter Silme Butonu Kontrolleri
    function openClearInventoryModal() {
        document
            .getElementById('clear-inventory-modal')
            .classList.add('active');
    }

    function closeClearInventoryModal() {
        document
            .getElementById('clear-inventory-modal')
            .classList.remove('active');
    }

    function clearInventory() {
        if (activeMusicKitAudio) {
            activeMusicKitAudio.pause();
            activeMusicKitAudio = null;
            isMusicKitPlaying = false;
        }

        userStore.inventory = [];

        saveUserData();

        closeClearInventoryModal();
    }

    const backgroundMusic = new Audio('arkaplanmuzik.mp3');

    backgroundMusic.loop = true;
    backgroundMusic.volume = 1;

    let isBackgroundMusicPlaying = true;
    let backgroundMusicAllowed = false;

    function updateBackgroundMusicIcon() {
        const icon = document.getElementById('music-icon');

        if (!icon) return;

        if (isBackgroundMusicPlaying) {
            icon.innerHTML =
                '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>' +
                '<path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path>';
        } else {
            icon.innerHTML =
                '<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>' +
                '<line x1="23" y1="9" x2="17" y2="15"></line>' +
                '<line x1="17" y1="9" x2="23" y2="15"></line>';
        }
    }

    function playBackgroundMusic() {
        if (!backgroundMusicAllowed) return;

        backgroundMusic
            .play()
            .then(() => {
                isBackgroundMusicPlaying = true;
                updateBackgroundMusicIcon();
            })
            .catch(() => {});
    }

    function toggleBackgroundMusic() {
        if (!backgroundMusicAllowed) return;

        if (backgroundMusic.paused) {
            playBackgroundMusic();
        } else {
            backgroundMusic.pause();
            isBackgroundMusicPlaying = false;
            updateBackgroundMusicIcon();
        }
    }

    function playMainLogoAnimation() {
        const logo = document.querySelector('.main-center-logo');

        if (!logo) return;

        logo.classList.remove('logo-rise');

        void logo.offsetWidth;

        logo.classList.add('logo-rise');
    }

    function startBackgroundMusicAfterIntro() {
        backgroundMusicAllowed = true;

        if (isBackgroundMusicPlaying) {
            playBackgroundMusic();
        }
    }

    function closeIntroScreen() {
        const intro = document.getElementById('intro-screen');

        if (!intro || intro.classList.contains('hidden')) return;

        intro.classList.add('hidden');

        startBackgroundMusicAfterIntro();
    }

    function startIntro() {
        const intro = document.getElementById('intro-screen');
        const video = document.getElementById('intro-video');

        if (!intro || !video) {
            startBackgroundMusicAfterIntro();
            setTimeout(playMainLogoAnimation, 8000);
            return;
        }

        intro.classList.remove('hidden');
        video.currentTime = 0;

        const playIntro = () => {
            video.play().catch(() => {});
        };

        playIntro();

        setTimeout(closeIntroScreen, 7000);
        setTimeout(playMainLogoAnimation, 8000);
    }

    let copyNotificationTimer = null;

    function copyCrosshair(text, button) {
        const done = () => {
            if (button) {
                button.classList.remove('copied');
                void button.offsetWidth;
                button.classList.add('copied');
            }

            const notification = document.getElementById('copy-notification');

            if (!notification) return;

            notification.classList.add('show');

            clearTimeout(copyNotificationTimer);

            copyNotificationTimer = setTimeout(() => {
                notification.classList.remove('show');
            }, 2200);
        };

        if (navigator.clipboard && window.isSecureContext) {
            navigator.clipboard
                .writeText(text)
                .then(done)
                .catch(() => {
                    fallbackCopy(text);
                    done();
                });
        } else {
            fallbackCopy(text);
            done();
        }
    }

    function copyReadyConfig(button) {
        copyCrosshair(
            'cl_crosshairstyle 4; cl_crosshair_friendly_warning 1; cl_crosshair_recoil 0; cl_crosshairdot 0; cl_crosshairsize 3.1; cl_crosshairthickness 1.0; cl_crosshairgap -2.8; cl_crosshair_drawoutline 0; cl_crosshair_outlinethickness 1.0; cl_crosshaircolor 5; cl_crosshaircolor_r 255; cl_crosshaircolor_g 0; cl_crosshaircolor_b 0; cl_crosshairusealpha 1; cl_crosshairalpha 255; cl_crosshair_t 0; cl_show_observer_crosshair 2; cl_observed_bot_crosshair 0; cl_radar_always_centered 1; cl_radar_rotate 1; cl_radar_square_with_scoreboard 1; cl_hud_radar_scale 1.00; cl_radar_scale 0.35; cl_radar_scale_alternate 1.00; cl_silencer_mode 0; viewmodel_presetpos 3; cl_prefer_lefthand 0; r_drawtracers_firstperson 1; cl_showloadout 1; cl_use_opens_buy_menu 0; cl_buywheel_nonumberpurchases 0; cl_buywheel_donate_key 0; cl_scoreboard_mouse_enable_binding "+attack2"; cl_obs_interp_enable 1; cl_obs_interp_pos_rate 1.00; cl_player_ping_mute 0; cl_mute_enemy_team 0; cl_mute_all_but_friends_and_party 0; cl_allow_animated_avatars 0; cl_hide_avatar_images 0; cl_sanitize_player_names 0; cl_teamid_overhead_mode 2; cl_teammate_colors_show 1; lobby_default_privacy_bits2 1; ui_setting_advertiseforinvite 0; hud_scaling 0.93; cl_hud_color 5; cl_teamcounter_playercount_instead_of_avatars 0',
            button
        );
    }

    function fallbackCopy(text) {
        const input = document.createElement('textarea');

        input.value = text;
        input.style.position = 'fixed';
        input.style.opacity = '0';

        document.body.appendChild(input);

        input.focus();
        input.select();

        try {
            document.execCommand('copy');
        } catch (e) {}

        input.remove();
    }

    function openUpdatesModal() {
        const modal = document.getElementById('updates-modal');

        if (modal) {
            modal.classList.remove('active');

            void modal.offsetWidth;

            modal.classList.add('active');
        }
    }

    function closeUpdatesModal() {
        const modal = document.getElementById('updates-modal');

        if (modal) {
            modal.classList.remove('active');
        }
    }

    document.addEventListener('DOMContentLoaded', () => {
        checkSessionOnLoad();
        updateBackgroundMusicIcon();
        initCompetitivePage();
        startIntro();

        document.addEventListener(
            'click',
            () => {
                if (
                    backgroundMusicAllowed &&
                    backgroundMusic.paused &&
                    isBackgroundMusicPlaying
                ) {
                    playBackgroundMusic();
                }
            },
            { once: true }
        );
    });
