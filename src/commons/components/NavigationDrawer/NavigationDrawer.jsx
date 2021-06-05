import React from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux'
import { selectUserProfile } from '../../../redux/slicers/user.slicer'
import { useTheme, Avatar, Title, Caption, Drawer, Text, TouchableRipple, Switch } from 'react-native-paper';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AntIcon from 'react-native-vector-icons/AntDesign'
import IonIcon from 'react-native-vector-icons/Ionicons'
import { styles } from './styles'
import { ALBUM_PAGE, HOME_PAGE, CAMERA_PAGE } from '../../../enums/page-name'
import { ALBUM_TITLE, CAMERA_TITLE, GALLERY_TITLE, HOME_TITLE, PROFILE_TITLE, SECTION_TITLE, SIGN_OUT_TITLE } from '../../../enums/drawer-title'


import { handleNavigation, handleSignOut } from './handler'


export const NavigationDrawerContent = (props) => {

    const dispatch = useDispatch()
    const userProfile = useSelector(selectUserProfile)

    const paperTheme = useTheme()
    return (
        <View style={{ flex: 1 }}>
            <DrawerContentScrollView {...props}>
                <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}>
                        <View style={{ flexDirection: 'row', marginTop: 15 }}>
                            <Avatar.Image
                                source={{
                                    uri: 'https://i.pinimg.com/originals/c1/13/df/c113df816b94afc3224d925890e290e2.jpg'
                                }}
                                size={50}
                            />
                            <View style={{ marginLeft: 15, flexDirection: 'column' }}>
                                <Title style={styles.title}>Marumi</Title>
                                <Caption style={styles.caption}>@nhatthanhlolo1</Caption>
                            </View>
                        </View>
                    </View>

                    <Drawer.Section style={styles.drawerSection} title={SECTION_TITLE}>
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="home-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={HOME_TITLE}
                            onPress={() => { props.navigation.navigate('Home') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="account-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={PROFILE_TITLE}
                            onPress={() => { props.navigation.navigate('Profile') }}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <Icon
                                    name="camera-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={CAMERA_TITLE}
                            onPress={() => handleNavigation({navigation: props.navigation, pageName:CAMERA_PAGE})}
                        />
                        <DrawerItem
                            icon={({ color, size }) => (
                                <AntIcon
                                    name="picture"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={GALLERY_TITLE}
                            onPress={() => { props.navigation.navigate('Gallery') }}
                        />

                        <DrawerItem
                            icon={({ color, size }) => (
                                <IonIcon
                                    name="albums-outline"
                                    color={color}
                                    size={size}
                                />
                            )}
                            label={ALBUM_TITLE}
                            onPress={() =>  handleNavigation({navigation: props.navigation, pageName: ALBUM_PAGE})}
                        />
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({ color, size }) => (
                        <Icon
                            name="exit-to-app"
                            color={color}
                            size={size}
                        />
                    )}
                    label={SIGN_OUT_TITLE}
                    onPress={() => { handleSignOut({dispatch})}}
                />
            </Drawer.Section>
        </View>
    );
}
