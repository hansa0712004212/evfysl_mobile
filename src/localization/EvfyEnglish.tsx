import { PASSWORD_LENGTH_MAX, PASSWORD_LENGTH_MIN } from '../constants/EvfyConstants';

export default {
  components: {
    mobile: {
      all: 'All',
      suggested: 'Suggested',
      noCountry: 'No matches found. Try a different search.'
    }
  },
  ui: {
    guide: {
      title1: 'Search',
      description1: 'Find charging stations anywhere you need.',
      title2: 'Filter',
      description2: 'Filter charging stations by connector type.',
      title3: 'Favorites',
      description3: 'Save your favorite charging stations for quick access and updates.',
      title4: 'History',
      description4: 'Keep track of your check-ins.',
      title5: 'Map',
      description5: 'Discover charging stations near you or along your route.'
    },
    login: {
      signIn: 'Sign in',
      signUp: 'Sign up',
      google: 'Google',
      facebook: 'Facebook',
      useSocialLogin: 'Use social login',
      noAccount: 'New here? Creating an account is quick and easy. Let\'s get started!',
      createAccount: 'Create an account',
      forgotPassword: 'Forgot password'
    },
    signup: {
      firstName: 'First name',
      lastName: 'Last name',
      passwordAgain: 'Password again',
      mobile: 'Mobile number',
      haveAnAccount: 'I have an account already',
      acceptAgreement: 'By clicking here, I state that I have read and understood the terms and conditions.',
      passwordMismatch: 'The passwords you entered don\'t match. Please try again.'
    },
    forgotPassword: {
      changeEmail: 'Change email',
      resetPassword: 'Reset password',
      title: 'Forgot Password',
      btnSubmit: 'Submit',
      dismissed: 'Reset password has been dismissed',
      description: 'Forgot Your Password?\nNo worries, Just enter your registered email address, and we\'ll send you an email to reset your password.',
      emailSent: 'An email has been sent to your email address {0}. Please check your inbox.\nIf this email is linked to an account, you will receive the instructions email.',
      openEmailMessage: 'Open your email app to find the email sent to you.',
      openEmailTitle: 'Which app would you like to open?'
    },
    home: {
      title: 'Home',
      fastC: 'Fast',
      slowC: 'Slow',
      exclusiveC: 'Exclusive',
      addVehicle: 'Add a BEV or PHEV',
      verifyEmail: 'Verify email'
    },
    bottomNav: {
      home: 'Home',
      chargers: 'EV  Stations',
      settings: 'Settings',
      profile: 'Profile'
    },
    chargers: {
      title: 'All chargers',
      showAllFilters: 'Show all filters ...',
      hideAllFilters: 'Hide all filters ...',
      mapOpenDialogTitle: 'App to open the map',
      mapOpenDialogMessage: 'Which app would you like to use?',
      exclusive: 'Exclusive',
      excludeExclusive: 'Exclude Exclusive',
      includeExclusive: 'Include Exclusive'
    },
    settings: {
      bannerDescription: 'Update your profile and add your vehicle(s) for a seamless experience.',
      okGotIt: 'Ok. Got it.',
      personal: 'Personal',
      community: 'Community',
      myProfile: 'My Profile',
      myVehicles: 'My Vehicles',
      addChargingStation: 'Add Charging Station',
      myStatistics: 'My Statistics...',
      checkins30: 'Check-ins, Last 30days',
      checkinsTotal: 'Check-ins, Total',
      locationsAdded: 'Locations Added',
      statistics: 'Statistics',
      allChargers: 'All Chargers',
      registeredUsers: 'All Registed Users',
      checkins: 'Check-ins',
      myCheckins: 'My Check-ins',
      activities: 'Activities',
      miscellaneous: 'Miscellaneous',
      appSettings: 'App Settings',
      rateUs: 'Rate us',
      logout: 'Sign out',
      faq: 'Frequently asked questions',
      feedback: 'Give Feedback'
    },
    editProfile: {
      title: 'My Profile',
      newPassword: 'New password',
      updateProfile: 'Update profile',
      changePassword: 'Change password',
      currentPassword: 'Current password',
      changePasswordDescription: 'You can change your account password here.',
      changePasswordSuccessAlert: 'You will be logged out now. Please log in again to continue.'
    },
    myVehicles: {
      model: 'Model',
      title: 'My Vehicles',
      nickName: 'Nick name',
      addVehicle: 'Add a vehicle',
      manufacturer: 'Manufacturer',
      acProtocol: 'AC Charging Protocol',
      dcProtocol: 'DC Charging Protocol',
      manufactureYear: 'Manufacture year',
      notInList: 'My vehicle isn\'t in the list',
      notInListDescription: 'Share your vehicle details with us, and we\'ll add it to the system after review.'
    },
    appSettings: {
      title: 'App Settings'
    }
  },
  common: {
    ok: 'OK',
    or: 'Or',
    no: 'No',
    yes: 'Yes',
    add: 'Add',
    email: 'Email',
    clear: 'Clear',
    submit: 'Submit',
    cancel: 'Cancel',
    update: 'Update',
    dismiss: 'Dismiss',
    password: 'Password',
    information: 'Information',
    areYouSure: 'Are you sure?',
    deleteSelected: 'Do you really want to remove the selected item?'
  },
  errors: {
    emailSendSuccess: 'An OTP has been sent successfully.',
    emailSendFail: 'Sorry, an error occured. Please try again later.',
    required: 'Please provide a value. It is required.',
    invalidInput: 'Oops! The value you entered doesn\'t seem to be valid.',
    acceptTerms: 'Please accept the terms to proceed.',
    invalidEmail: 'Oops! That doesn\'t look like a valid email.',
    linkOpenFailure: 'Unable to open the link.',
    passwordLengthMin: `Your password must be no longer than ${PASSWORD_LENGTH_MIN} characters.`,
    passwordLengthMax: `Your password must be at least ${PASSWORD_LENGTH_MAX} characters long for better security.`
  },
  serverResponses: {
    LOGIN_SUCCESS: 'Login successful.',
    LOGIN_ERROR: 'Login failed. Please check your email and password.',
    LOGOUT_SUCCESS: 'Logout successful.',
    LOGOUT_ERROR: 'Logout failed. Please try again.',
    REGISTER_SUCCESS: 'Registration successful.',
    REGISTER_PROFILE_UPDATE_ERROR: 'Profile update failed. Please try again.',
    REGISTER_EMAIL_VERIFICATION_ERROR: 'Email verification failed. Please try again.',
    REGISTER_ERROR: 'Registration failed. Please try again.',
    RESET_PASSWORD_EMAIL_SUCCESS: 'An email has been sent to your email address. Please check your inbox.',
    RESET_PASSWORD_EMAIL_ERROR: 'Failed to send email. Please try again.',
    LOGIN_ERROR_INVALID_CREDENTIAL: 'Invalid email or password. Please try again.',
    RESET_PASSWORD_EMAIL_TOO_MANY_REQUESTS: 'Too many requests. Please try again later.',
    CHANGE_PASSWORD_SUCCESS: 'Password has been changed successfully.',
    CHANGE_PASSWORD_ERROR: 'Password has been changed failed. Please try again later.',
    CHANGE_PASSWORD_ERROR_INVALID_CREDENTIAL: 'Authentication failed. Check your old password.',
    CHANGE_PASSWORD_ERROR_GENERIC: 'System failure on changing the password.',
    SUGGEST_EV_SUCCESS: 'We have received your feedback. Our team will review it and get back to you via email.',
    SUGGEST_EV_FAIL: 'System error. Please try again later.',
    PROFILE_ADD_EV_SUCCESS: 'Your BEV/PHEV has been added to your profile.',
    PROFILE_ADD_EV_FAIL: 'Error occurred while adding your vehicle. Please try again later.',
    PROFILE_REMOVE_EV_SUCCESS: 'Your BEV/PHEV has been removed from your profile.',
    PROFILE_REMOVE_EV_FAIL: 'Error occurred while removing your vehicle. Please try again later.'
  },
  seek: {
    homeBannerTitle: 'Complete the remaining steps to get the most out of the app!',
    verifyEmail: 'Your email is not verified yet. Please check your inbox to complete the verification process.',
    addVehicle: 'Add your BEV or PHEV vehicle(s) for a seamless app experience.',
  }
}