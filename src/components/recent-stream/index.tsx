import { Table, TableBody, TableCell, TableContainer ,TableHead, TableRow, Paper  } from '@mui/material';
import { recentStreams } from '../../data';
import styles from './styles.module.css'

const RecentStreamsTable = () => {
    return (
        <div className={styles.container}>
            <h3>Recent Streams</h3>
            <TableContainer component={Paper}>
                <Table aria-label="recent streams table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Song</TableCell>
                            <TableCell>Artist</TableCell>
                            <TableCell>Date Streamed</TableCell>
                            <TableCell>Streams</TableCell>
                            <TableCell>User ID</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {recentStreams.map((stream, index) => (
                            <TableRow key={index}>
                                <TableCell>{stream.song}</TableCell>
                                <TableCell>{stream.artist}</TableCell>
                                <TableCell>{stream.dateStreamed}</TableCell>
                                <TableCell>{stream.streams}</TableCell>
                                <TableCell>{stream.userId}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};

export default RecentStreamsTable