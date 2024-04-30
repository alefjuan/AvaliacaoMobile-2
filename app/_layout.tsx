import { Stack } from "expo-router";
import {
    ActionSheetProvider,
    connectActionSheet,
  } from "@expo/react-native-action-sheet";

function layout(){
    
return(
        <ActionSheetProvider>
            <Stack>

            </Stack>
        </ActionSheetProvider>
      );
}
const ConnectedApp = connectActionSheet(layout);

export default ConnectedApp;