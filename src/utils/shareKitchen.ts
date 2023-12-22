import * as Linking from "expo-linking";
import * as Sharing from "expo-sharing";

const openAppOrStore = async (eventId: string): Promise<void> => {
  const eventUrl: string = Linking.createURL(`/event/${eventId}`);

  const supported: boolean = await Linking.canOpenURL(eventUrl);

  if (supported) {
    // The app is installed, open the deep link
    Linking.openURL(eventUrl);
  } else {
    // The app is not installed, redirect to the Play Store (for Android)
    Linking.openURL('https://play.google.com/store/apps/details?id=com.smartweb.eventshub');
  }
};

// Function to share an event
export const shareEvent = async (eventId: string): Promise<void> => {
  const eventUrl: string = Linking.createURL(`/event/${eventId}`);

  try {
    const isAvailable: boolean = await Sharing.isAvailableAsync();

    if (isAvailable) {
      // Sharing API is available, proceed with sharing
      await Sharing.shareAsync(eventUrl, { dialogTitle: "Event Details" });
    } else {
      // Sharing API is not available, handle accordingly
      console.log("Sharing is not available on this platform.");
    }
  } catch (error) {
    console.error(error);
  }
};
