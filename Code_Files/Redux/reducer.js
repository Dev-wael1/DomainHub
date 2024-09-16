import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  whoisHostingInputValue: "",
  godaddyDomains: "",
  allExt: "",
  whoisHostingInfo: "",
  loading: false,
  topTenHostingPageData: "",
  loggedIn: false,
  exitModalData: "",
  hostingLocation: "",
  dnsInfo: "",
  footerContent: "",
  pageData: "",
  firstDomain: "",
  inputValue: "",
  affiliateLinks: "",
  domains: "",
  showCard: false,
  randomDomain: "",
  showRegistered: true,
  bulkLocation: "",
  whois: "",
  googleAdsense: "",
  bannerAds: "",
  textAds: false,
  dnsPageData: "",
  whoisPageData: "",
  hostingLocationPageData: "",
  reverseIPPageData: "",
};

export const reducer = createSlice({
  name: "reducer",
  initialState,
  reducers: {
    setWhoisHostingInputValue: (state, action) => {
      state.whoisHostingInputValue = action.payload;
    },
    setGodaddyDomains: (state, action) => {
      state.godaddyDomains = action.payload;
    },
    setAllExt: (state, action) => {
      state.allExt = action.payload;
    },
    setWhoisHostingInfo: (state, action) => {
      state.whoisHostingInfo = action.payload;
    },
    setDnsPageData: (state, action) => {
      state.dnsPageData = action.payload;
    },
    setWhoisPageData: (state, action) => {
      state.whoisPageData = action.payload;
    },
    setHostingLocationPageData: (state, action) => {
      state.hostingLocationPageData = action.payload;
    },
    setReverseIPPageData: (state, action) => {
      state.reverseIPPageData = action.payload;
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },

    setTopTenHostingPageData: (state, action) => {
      state.topTenHostingPageData = action.payload;
    },

    setExitModalData: (state, action) => {
      state.exitModalData = action.payload;
    },
    setLoggedIn: (state, action) => {
      state.loggedIn = action.payload;
    },
    setHostingLocation: (state, action) => {
      state.hostingLocation = action.payload;
    },

    setDnsInfo: (state, action) => {
      state.dnsInfo = action.payload;
    },
    setFooterContent: (state, action) => {
      state.footerContent = action.payload;
    },

    setPageData: (state, action) => {
      state.pageData = action.payload;
    },
    setFirstDomain: (state, action) => {
      state.firstDomain = action.payload;
    },
    setInputValue: (state, action) => {
      state.inputValue = action.payload;
    },
    setAffiliateLinks: (state, action) => {
      state.affiliateLinks = action.payload;
    },
    setDomains: (state, action) => {
      state.domains = action.payload;
    },
    setShowCard: (state, action) => {
      state.showCard = action.payload;
    },
    setRandomDomain: (state, action) => {
      state.randomDomain = action.payload;
    },
    setShowRegistered: (state, action) => {
      state.showRegistered = !state.showRegistered;
    },
    setWhois: (state, action) => {
      state.whois = action.payload;
    },
    setBulkLocation: (state, action) => {
      state.bulkLocation =
        action.payload != ""
          ? [...state.bulkLocation, action.payload]
          : action.payload;
    },
    setBannerAds: (state, action) => {
      state.bannerAds = action.payload;
    },
    setGoogleAdsense: (state, action) => {
      state.googleAdsense = action.payload;
    },
    setTextAds: (state, action) => {
      state.textAds = action.payload;
    },
  },
});

export const {
  setHomePageData,
  setWhoisHostingInfo,
  setWhoisHostingInputValue,
  setLoading,
  setGodaddyDomains,
  setAllExt,
  setLoggedIn,
  setTopTenHostingPageData,
  setExitModalData,
  setHostingLocation,
  setDnsPageData,
  setHostingLocationPageData,
  setReverseIPPageData,
  setWhoisPageData,
  setDnsInfo,
  setFooterContent,

  setPageData,
  setFirstDomain,
  setAffiliateLinks,
  setInputValue,
  setDomains,
  setShowCard,
  setRandomDomain,
  setShowRegistered,
  setBulkLocation,
  setWhois,
  setGoogleAdsense,
  setBannerAds,
  setTextAds,
} = reducer.actions;
export default reducer.reducer;
