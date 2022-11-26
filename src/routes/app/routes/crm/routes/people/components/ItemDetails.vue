<template>
  <item-details-container :title="$t('title')" :fields="fields" :basic-information="$t('basicInformation')">
    <v-tab key="triplets" ripple>{{ $t('triplets') }}</v-tab>
    <!-- Positions -->
    <v-tab-item key="triplets">
      <v-card flat>
        <v-card-text>
          <person-triplets
            :exclude="['id', 'person']"
            path="api/Triplets"
            child-item-name="personTriplets"
            fk-name="person"
          ></person-triplets>
        </v-card-text>
      </v-card>
    </v-tab-item>

  </item-details-container>
</template>

<script>
import ItemDetailsContainer from '@/utils/crud/components/ItemDetailsContainer.vue'
import ItemDetailsContainerMixin from '@/utils/crud/mixins/item-details-container'
import PersonTriplets from './PersonTriplets.vue'

export default {
  mixins: [ItemDetailsContainerMixin],
  components: {
    ItemDetailsContainer,
    PersonTriplets,
  },
  created () {
    this.setIdColumn('id')
    this.setChildItemsMapping([
      {
        name: 'personTriplets',
        objName: 'triplets',
      },
    ])
  },
  i18n: {
    messages: {
      ar: {
        title: 'تفاصيل ',
        basicInformation: 'البيانات ',
        positions: 'أجهزة الاتصال',
      },
      en: {
        title: 'Person details',
        basicInformation: 'Basic information',
        triplets: 'Communication Devices',
      },
    },
  },
}

</script>
