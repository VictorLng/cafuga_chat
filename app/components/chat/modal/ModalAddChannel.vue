<template>
    <v-dialog v-model="computedDialog" persistent max-width="500px">
        <v-card>
            <v-card-title>
                <span class="headline">Adicionar canal</span>
            </v-card-title>
            <v-card-text>
                <v-text-field
                    v-model="channelName"
                    label="Nome do canal"
                    outlined
                    dense
                ></v-text-field>
            </v-card-text>
            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="close">Cancelar</v-btn>
                <v-btn color="blue darken-1" text @click="addChannel">Adicionar</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</template>

<script lang="ts">
 export default {
    name: 'ModalAddChannel',
    data() {
        return {
            channelName: ''
        };
    },
    props: {
        dialog: {
            type: Boolean,
            required: true
        }
    },
    methods: {
        addChannel() {
            if (!this.channelName.trim()) return;

            this.$emit('add-channel', this.channelName);
            this.channelName = '';
        },
        close() {
            this.$emit('close-modal');
        }
    },
    computed: {
        computedDialog: {
            get() {
                return this.dialog;
            },
            set(value : boolean) {
                this.$emit('update:dialog', value);
            }
        }
    }
};
</script>