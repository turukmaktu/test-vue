<template>
    <v-container>
        <v-row justify="center">
            <v-btn
            color="primary"
            dark
            @click.stop="dialog = true"
            >
            Открыть модальное окно
            </v-btn>


            <v-dialog
            v-model="dialog"
            max-width="780"
            >
                <v-card>
                    <v-card-text>
                    <v-tabs v-model="tab" color="darck">
                            <v-tab>
                                Deposit
                            </v-tab>
                            <v-tab>
                                Withdraw
                            </v-tab>
                            <v-tab>
                                Rebalance
                            </v-tab>
                        </v-tabs>
                        <v-tabs-items v-model="tab">
                                <v-tab-item>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-select
                                            label="Kraken"
                                            append-icon="mdi-chevron-up"
                                            filled
                                            >
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-select
                                            label="Choose currency"
                                            append-icon="mdi-chevron-up"
                                            filled
                                            disabled="true"
                                            >
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-img :src="require('../assets/qrcode.png')" height="112" contain></v-img>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" class="mx-2">
                                        <p class="font-weight-bold">FGBfvcnkfdnvkk74365832ybvcvdfvfvb</p>
                                    </v-row>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-btn x-large width="100%"
                                            color="primary"
                                            dark>Copy</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-select
                                            label="Choose exchange"
                                            append-icon="mdi-chevron-up"
                                            filled
                                            >
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-select
                                            label="Choose currency"
                                            append-icon="mdi-chevron-up"
                                            filled
                                            disabled="true"
                                            >
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-select
                                            label="Choose currency"
                                            filled
                                            >
                                                <v-card slot="append">
                                                    <v-card class="pa-1 white--text" color="label"
                                                    >Max</v-card>
                                                </v-card>
                                            </v-select>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-btn x-large width="100%"
                                            color="primary"
                                            dark>Withdraw</v-btn>
                                        </v-col>
                                    </v-row>
                                </v-tab-item>
                                <v-tab-item>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-row>
                                                <v-col md="12">
                                                    From
                                                </v-col>
                                                <v-col md="12">
                                                    <v-select
                                                    append-icon="mdi-chevron-up"
                                                    filled
                                                    placeholder="Choose exchange"
                                                    >
                                                    </v-select>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-row>
                                                <v-col md="12">
                                                    To
                                                </v-col>
                                                <v-col md="12">
                                                    <v-select
                                                    append-icon="mdi-chevron-up"
                                                    filled
                                                    placeholder="Choose exchange"
                                                    >
                                                    </v-select>
                                                </v-col>
                                            </v-row>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-text-field   
                                                label="Filled"
                                                filled
                                            ></v-text-field>
                                        </v-col>
                                    </v-row>
                                    <v-row justify="center" class="mx-2">
                                        <v-col class="d-flex" md="6" sm="12">
                                            <v-card width="100%">
                                                <v-row class="px-2">
                                                    <v-col sm=6>
                                                        <v-card color="primary">Balance: <span>0.2342342</span></v-card>
                                                    </v-col>
                                                </v-row>
                                                <v-row class="px-2" justify="left">
                                                    <v-col>
                                                        <v-card class="pa-1 white--text" color="label">10%</v-card>
                                                    </v-col>
                                                    <v-col>
                                                        <v-card class="pa-1 white--text" color="label">25%</v-card>
                                                    </v-col>
                                                    <v-col>
                                                        <v-card class="pa-1 white--text" color="label">50%</v-card>
                                                    </v-col>
                                                    <v-col>
                                                        <v-card class="pa-1 white--text" color="label">100%</v-card>
                                                    </v-col>
                                                    <v-col>
                                                        <v-card class="pa-1 white--text" color="label">Split</v-card>
                                                    </v-col>
                                                </v-row>
                                            </v-card>
                                        </v-col>
                                        
                                    </v-row>
                                </v-tab-item>
                        </v-tabs-items>
                    </v-card-text>
                </v-card>
            </v-dialog>
        </v-row>
    </v-container>
</template>

<script>
  export default {
    name: 'FoundYourAcc',
    data: () => ({
        dialog: false,
        tab: null,
    })
  }
</script>